import express from "express";
import productController from "../controllers/product.controller.js";

const router = express.Router();

router.get("/api/products", productController.getProducts);

/*
GET /api/products/:id

*/
router.get("/:id", productController.getOneProductbyId);

/*
POST /api/products/

*/
router.post("/api/prodcts", productController.createProduct);

export default router;
