import express from "express";

import auth from "../middlewares/auth.js";
import orderController from "../controllers/order.controller.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import validate from "../middlewares/validator.js";
import { ROLE_ADMIN, ROLE_MERCHANT, ROLE_USER } from "../constants/roles.js";
import { orderSchema, orderStatuSchema } from "../libs/schemas/order.js";

const router = express.Router();

/** 
 Url: /api/orders
 Method: get
 */

router.get("/api/orders", roleBasedAuth(ROLE_ADMIN), orderController.getOrders);

router.get(
  "/api/orders/:id",
  roleBasedAuth(ROLE_USER),
  orderController.getOrdersById
);

/** 
 Url: /api/orders
 Method: POST
 */

router.post(
  "/api/orders",
  roleBasedAuth(ROLE_USER),
  validate(orderSchema),
  orderController.createOrder
);

/** 
 Url: /api/orders
 Method: PUT
 */

router.put("/api/orders/:id/cancel", orderController.cancelOrder);

/** 
 Url: /api/orders/:id/status
 Method: PUT
 */

router.put(
  "/api/orders/:id/status",
  roleBasedAuth(ROLE_ADMIN),
  validate(orderStatuSchema),
  orderController.updateOrderStatus
);

/** 
 Url: /api/orders
 Method: DELETE
 */

router.delete("/api/orders/:id", auth, orderController.deleteOrder);

router.get(
  "/api/orders/merchant",
  roleBasedAuth(ROLE_MERCHANT),
  orderController.getOrdersByMerchant
);

/** 
 Url: /api/orders/:id/payment/khalti
 Method: POST
 */
router.post(
  "/api/orders/:id/payment/khalti",
  roleBasedAuth(ROLE_USER),
  orderController.getOrdersById
);

/** 
 Url: /api/orders/:id/payment/cash
 Method: POST
 */
router.post(
  "/api/orders/:id/payment/cash",
  roleBasedAuth(ROLE_USER),
  orderController.orderPaymentViaCash
);

/** 
 Url: /api/orders/:id/confirm-payment
 Method: PUT
 */
router.post(
  "/api/orders/:id/confirm-payment",
  roleBasedAuth(ROLE_USER),
  orderController.getOrdersById
);

export default router;
