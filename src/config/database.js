import mongoose from "mongoose";
import config from "./config.js";

const conntectDB = async () => {
  try {
    await mongoose.connect(config.mongoDBUrl);

    console.log("MonogDB conntected successfully...");
  } catch (error) {
    console.log(error);
  }
};

export default conntectDB;
