import crypto from "crypto";

import Order from "../models/Order.js";
import Payment from "../models/Payment.js";
import { ROLE_ADMIN } from "../constants/roles.js";
import {
  ORDER_STATUS_CANCELLED,
  ORDER_STATUS_CONFIRMED,
} from "../constants/orderStatuses.js";
import { payViaKhalti } from "../utils/payment.js";

const getOrders = async () => {
  return await Order.find()
    .populate("user", "name  email phone ")
    .populate("orderItems.product", "name brand category price imageUrls");

  //.populate act as foregin key so it is used to get the data
  // 'user'-> this is user of order model where we get data from user model
  // 'name email phone"-> these are the data we want from that user model
};

const getOrdersById = async (id) => {
  const order = await Order.find(id)
    .sort({ createdAt: -1 })
    .populate("user", "name  email phone ")
    .populate("orderItems.product", "name brand category price imageUrls");

  if (!order)
    throw {
      status: 404,
      message: "Order not found.",
    };

  return order;
};

const updateOrderStatus = async (id, status) => {
  return await Order.findByIdAndUpdate(id, { status }, { new: true });
};

const createOrder = async (data, userId) => {
  //generating randown or order number
  const orderNumber = crypto.randomUUID();

  return await Order.create({ ...data, user: userId, orderNumber });
};

const cancelOrder = async (id, user) => {
  const order = await getOrdersById(id);

  if (!user.roles.inculdes(ROLE_ADMIN) && order.user._id != user._id)
    throw {
      status: 403,
      message: "Access denied.",
    };

  return await Order.findByIdAndUpdate(
    id,
    { status: ORDER_STATUS_CANCELLED },
    { new: true }
  );
};

const deleteOrder = async (id, user) => {
  const order = await getOrdersById(id);

  if (!user.roles.inculdes(ROLE_ADMIN))
    throw {
      status: 403,
      message: "Access denied.",
    };

  return await Order.findByIdAndDelete(id);
};

const orderPaymentViaKhalti = async (id, user) => {
  const order = await getOrdersById(id);

  // //random transcation id
  // const transctionId = crypto.randomUUID();

  // //Initalize payment or creating
  const orderPayment = await Payment.create({
    // transctionId,
    method: "ONLINE",
    amount: order.totalPricew,
  });

  //updating order
  await Order.findByIdAndUpdate(id, {
    payment: orderPayment._id,
  });

  return await payViaKhalti({
    amount: order.totalPrice,
    purchaseOrderId: order.orderNumber,
    purchaseOrderName: order.orderItems[0].product.name,
    customer: order.user,
  });
};

const orderPaymentViaCash = async (id, user) => {
  const order = await getOrdersById(id);

  // //random transcation id
  // const transctionId = crypto.randomUUID();

  // //Initalize payment or creating
  const orderPayment = await Payment.create({
    // transctionId,
    method: "CASH",
    amount: order.totalPricew,
  });

  //updating order
  return await Order.findByIdAndUpdate(
    id,
    {
      payment: orderPayment._id,
      status: ORDER_STATUS_CONFIRMED,
    },
    { new: true }
  );
};

// confirmOrder - payment
const confirmOrderPayment = async (id, status) => {
  const order = await getOrdersById(id);

  if ((status, toUpperCase() !== "COMPLETED")) {
    await Payment.findByIdAndUpdate(order.payment, {
      status: "FAILED",
    });

    throw {
      statuse: 400,
      message: "Payment failed.",
    };
  }

  await Payment.findByIdAndDelete(order.payment, {
    status: "SUCCESS",
  });

  return await Order.findByIdAndDelete(
    id,
    {
      status: ORDER_STATUS_CONFIRMED,
    },
    { new: true }
  );
};

// getOrderByMerchant

const getOrdersByMerchant = async (merchantId) => {
  return await Order.aggregate([
    {
      $lookup: {
        from: "products",
        localField: "orderItems.product",
        foreignField: "_id",
        as: "orderedProducts",
      },
    },
    {
      $unwind: "$orderedProducts",
    },
    {
      $match: {
        "orderedProducts.createdBy": new mongoose.Types.ObjectId(merchantId),
      },
    },
    {
      $project: {
        orderNumber: 1,
        payment: 1,
        shippingAddress: 1,
        status: 1,
        totalPrice: 1,
        user: 1,
        "orderedProducts.price": 1,
        "orderedProducts.name": 1,
        "orderedProducts.imageUrls": 1,
        "orderedProducts.category": 1,
        "orderedProducts.brand": 1,
      },
    },
  ]);
};

export default {
  createOrder,
  getOrders,
  getOrdersById,
  deleteOrder,
  cancelOrder,
  updateOrderStatus,
  orderPaymentViaKhalti,
  orderPaymentViaCash,
  confirmOrderPayment,
  getOrdersByMerchant,
};
