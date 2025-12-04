import fs from "fs";

const products = fs.readFileSync("data/product.json", "utf-8");

const getProductsFromDB = (query) => {
  const brand = query.brand ?? "";

  const data = JSON.parse(products);

  return data.filter((item) => (brand ? item.brand == brand : true));
};

const getProductsById = (id) => {
  const data = JSON.parse(products);

  return data.find((item) => item.id == id);
};

const createProduct = (data) => {
  const prodctItems = JSON.parse(products);

  prodctItems.push(data);

  fs.writeFileSync("data/products.json", JSON.stringify(prodctItems));
};

export default {
  getProductsFromDB,
  getProductsById,
  createProduct,
};
