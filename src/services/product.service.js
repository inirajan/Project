import Product from "../models/Product.js";

const getProductsFromDB = async (query) => {
  const products = await Product.find();

  return products;
};

const getProductsById = async (id) => {
  const product = await Product.findById(id);

  if (!product)
    throw {
      status: 404,
      message: "Product not found",
    };

  return product;
};

const createProduct = async (data) => {
  return await Product.create(data);
};

const deleteProduct = async (id) => {
  await getProductsById(id);

  await Product.findByIdAndDelete(id);
};

const updateProduct = async (id) => {
  // return await Product.findByIdAndUpdate(id,data)  this will send existing data

  await getProductsById(id);

  return await Product.findByIdAndUpdate(id, data, { new: true }); // and this will send update products
};

export default {
  getProductsFromDB,
  getProductsById,
  createProduct,
  deleteProduct,
  updateProduct,
};

// const products = fs.readFileSync("data/product.json", "utf-8");

/*
const getProductsFromDB = (query) => {
  const brand = query.brand ?? "";

  const data = JSON.parse(products);

  return data.filter((item) => (brand ? item.brand == brand : true));
};
*/

/*
const getProductsById = (id) => {
  const data = JSON.parse(products);

  return data.find((item) => item.id == id);
};
*/

/*
const createProduct = (data) => {
  const prodctItems = JSON.parse(products);

  prodctItems.push(data);

  fs.writeFileSync("data/products.json", JSON.stringify(prodctItems));
};
*/
