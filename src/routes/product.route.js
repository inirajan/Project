import express from "express";
import productController from "../controllers/product.controller.js";
import auth from "../middlewares/auth.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { ROLE_MERCHANT } from "../constants/roles.js";
import { productSchema } from "../libs/schemas/product.js";
import validate from "../middlewares/validator.js";

const router = express.Router();

/* 
GET /api/products
*/

router.get("/api/products", productController.getProducts);

/*
GET /api/products/:id Eg. GET http://localhost:5000/api/products/2
here :(colon) means dynamic route

*/
router.get("/api/products/:id", productController.getOneProductbyId);

/*
//product create

POST /api/products/

*/
router.post(
  "/api/products",
  auth,
  roleBasedAuth(ROLE_MERCHANT),
  validate(productSchema),
  productController.createProduct
);

router.delete(
  "/api/products/:id",
  auth,
  roleBasedAuth(ROLE_MERCHANT),
  productController.deleteProduct
);

/*
//update
Put  /api/products/ id

*/
router.put(
  "/api/products/:id",
  auth,
  roleBasedAuth(ROLE_MERCHANT),
  productController.updateProduct
);

export default router;
