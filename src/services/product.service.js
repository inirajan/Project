import Product from "../models/Product.js";

const getProductsFromDB = async (query) => {
  console.log(query);

  //destructing of objects and filtering, sorting, limiting

  const { category, brand, name, min, max, limit, offset, createdBy } = query;

  const sort = query.sort ? JSON.parse(query.sort) : {};
  const filters = {};

  console.log(brand.split(","));

  if (category) filters.category = category; //Exact match
  if (brand) filters.brand = { $in: brand.split(",") }; // match data from list of items or array
  if (name) filters.name = { $regex: name, $optinon: "i" }; // Ilike match(case insensetive match)
  if (min) filters.price = { $gte: min };
  if (max) filters.price = { ...filters.price, $lts: max };
  if (createdBy) filters.createdBy = createdBy;

  console.log(filters);

  const products = await Product.find({ filters })
    .sort(sort)
    .limit(limit)
    .skip(offset);

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

const createProduct = async (data, userId) => {
  // return await Product.create(data);

  return await Product.create({ ...data, createdBy: userId });
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
