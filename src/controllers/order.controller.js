import orderService from "../services/order.service.js";

const getOrders = async (req, res) => {
  try {
    const data = await orderService.getOrders();

    res.status(201).json(data);
  } catch (error) {
    res.status(400).send(error?.message);
  }
};

const getOrdersById = async (req, res) => {
  try {
    const data = await orderService.getOrdersById(req.user._id);

    res.status(201).json(data);
  } catch (error) {
    res.status(400).send(error?.message);
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const data = await orderService.updateOrderStatus(
      req.params.id,
      req.body?.status
    );

    res.status(error.status || 400).json(data);
  } catch (error) {
    res.status(error.status || 400).send(error?.message);
  }
};

const createOrder = async (req, res) => {
  try {
    const data = await orderService.createOrder(req.body, req.user._id);

    res.status(201).json(data);
  } catch (error) {
    res.status(400).send(error?.message);
  }
};

const cancelOrder = async (req, res) => {
  try {
    const data = await orderService.cancelOrder(req.user);

    res.status(201).json(data);
  } catch (error) {
    res.status(error.status || 400).send(error?.message);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const data = await orderService.deleteOrder(req.params._id);

    res.status(201).json(data);
  } catch (error) {
    res.status(error.status || 400).send(error?.message);
  }
};

const orderPaymentViaKhalti = async (req, res) => {
  if (req.body?.status)
    return res.status(400).send("Payment status is required.");
  try {
    const data = await orderService.orderPaymentViaKhalti(req.params.id);

    res.json(data);
  } catch (error) {
    res.status(error.status || 400).send(error?.message);
  }
};

const orderPaymentViaCash = async (req, res) => {
  if (req.body?.status)
    return res.status(400).send("Payment status is required.");
  try {
    const data = await orderService.orderPaymentViaCash(req.params.id);

    res.json(data);
  } catch (error) {
    res.status(error.status || 400).send(error?.message);
  }
};

const confirmOrderPayment = async (req, res) => {
  try {
    const data = await orderService.confirmOrderPayment(
      req.params.id,
      req.body.status
    );

    res.json(data);
  } catch (error) {
    res.status(error.status || 400).send(error?.message);
  }
};

const getOrdersByMerchant = async (req, res) => {
  try {
    const data = await orderService.getOrderByMerchant(req.user._id);

    res.json(data);
  } catch (error) {
    res.status(error.status || 400).send(error?.message);
  }
};

export default {
  createOrder,
  getOrders,
  getOrdersById,
  cancelOrder,
  deleteOrder,
  updateOrderStatus,
  orderPaymentViaKhalti,
  confirmOrderPayment,
  orderPaymentViaCash,
  getOrdersByMerchant,
};
