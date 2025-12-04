import express from "express";
import productController from "../controllers/product.controller.js";

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
POST /api/products/

*/
router.post("/api/products", productController.createProduct);

export default router;
