import productService from "../services/product.service.js";
import jwt from "../utils/jwt.js";

const getProducts = async (req, res) => {
  try {
    const query = req.query;

    console.log(query);

    const data = await productService.getProductsFromDB(query);

    res.json(data);
  } catch (error) {
    res.status(400).send(error?.message);
  }
};

const getOneProductbyId = async (req, res) => {
  const id = req.params.id;

  try {
    console.log(id);

    const data = await productService.getProductsById(id);

    res.json(data);
  } catch (error) {
    res.status(error.status || 400).send(error?.message);
  }
};

const createProduct = async (req, res) => {
  const cookie = req.headers.cookie; // to see the cookie
  console.log(cookie);

  const token = cookie.split("=")[1];
  try {
    const result = await jwt.verifyJWT(token);
    //create data
    console.log(req.body);

    const createdProduct = await productService.createProduct(req.body);

    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).send(error?.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    await productService.deleteProduct(req.params.id);

    res.json({
      message: "Product delted Successfully",
      id: req.params.id,
    });
  } catch (error) {
    res.status(error.status || 400).send(error?.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const updataProduct = await productService.updateProduct(
      req.params.id,
      req.body
    );

    res.status(201).send(updataProduct);
  } catch (error) {
    res.status(error.status || 400).send(error?.message);
  }
};

export default {
  getProducts,
  getOneProductbyId,
  createProduct,
  deleteProduct,
  updateProduct,
};
