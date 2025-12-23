import z from "zod";

import {
  ORDER_STATUS_CANCELLED,
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_SHIPPED,
} from "../../constants/orderStatuses.js";

const addressSchema = z.object({
  city: z.string({ error: "Shipping address city   is required." }),
  province: z.string({ error: " Shipping address province iss required." }),
  street: z.string().optional(), // to make optional if not needed
  country: z.string().optional(),
});

const orderSchema = z.object({
  user: z.string({ error: "User is required." }).min(6),
  orderItems: z.array(
    z.object({
      product: z.string({ error: "Product is required." }),
    })
  ),
  totalPrice: z.number({ error: "Total price is required." }).min(0).max(13),
  shippingAddress: addressSchema,
});

const orderStatuSchema = z.object({
  status: z.enum([
    ORDER_STATUS_CANCELLED,
    ORDER_STATUS_CONFIRMED,
    ORDER_STATUS_DELIVERED,
    ORDER_STATUS_PENDING,
    ORDER_STATUS_SHIPPED,
  ]),
});

export { orderSchema, orderStatuSchema };
