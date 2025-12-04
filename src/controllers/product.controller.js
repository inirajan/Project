import productService from "../services/product.service.js";

const getProducts = (req, res) => {
  const query = req.query;

  console.log(query);

  const data = productService.getProductsFromDB(query);

  res.json(data);
};

const getOneProductbyId = (req, res) => {
  const id = req.params.id;
  console.log(id);

  const data = productService.getProductsById(id);

  if (!data) return res.status(404).send("Product not found.");

  res.json(data);
};

const createProduct = (req, res) => {
  //create data
  console.log(req.body);

  productService.createProduct(req.body);

  res.status(201).send("Product Created");
};

export default {
  getProducts,
  getOneProductbyId,
  createProduct,
};
