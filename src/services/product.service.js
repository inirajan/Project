import Product from "../models/Product.js";
import uploadFile from "../utils/fileUploder.js";
import promptAi from "../utils/ai.js";
import { PRODUCT_DESCRITPION_PROMPT } from "../constants/prompt.js";

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

const createProduct = async (data, files, userId) => {
  // return await Product.create(data);

  const uploadedFiles = await uploadFile(files);

  const imageUrls = uploadedFiles.map((item) => item.url);

  //Ai integraiton
  const promptMessage = PRODUCT_DESCRITPION_PROMPT.replace("%s", data.name)
    .replace("%s", data.brand)
    .replace("%s", data.category);

  const description = data.description ?? (await promptAi(promptMessage));

  return await Product.create({
    ...data,
    imageUrls,
    description,
    createdBy: userId,
  });
};

const deleteProduct = async (id) => {
  await getProductsById(id);

  await Product.findByIdAndDelete(id);
};

const updateProduct = async (id, data, files) => {
  // return await Product.findByIdAndUpdate(id,data)  this will send existing data

  await getProductsById(id);

  const updateData = data;

  if (files && files.length > 0) {
    const uploadedFiles = await uploadFile(files);

    updateData.imageUrls = uploadedFiles.map((item) => item.url);
  }

  return await Product.findByIdAndUpdate(id, updateData, { new: true }); // and this will send update products
};

export default {
  getProductsFromDB,
  getProductsById,
  createProduct,
  deleteProduct,
  updateProduct,
};
