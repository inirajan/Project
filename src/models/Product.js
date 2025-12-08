import mongoose, { Schema, model } from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    minLength: [2, "Invalid Product name."], // minLength is for string
  },

  brand: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: [true, "Product name is required"], // setting custom message
    min: [1, "Price must be greater than 1."],
    max: [9999999, "Price must be less than 99,99,999"],
  },

  createdAt: {
    type: Date,
    default: Date.now(), // current time stamp
  },

  stock: {
    type: Number,
    default: 1,
    min: [1, "Stock must be grater than one."],
    max: [100, "Stock must be less than hundred."],
  },

  imageUrls: [String], // for multiple set array
});

const model = mongoose.model("Product", productSchema);

export default model;
