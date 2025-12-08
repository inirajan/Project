import mongoose from "mongoose";
import config from "./config.js";

const conntectDB = async () => {
  try {
    const status = await mongoose.connect(config.mongoDBUrl);

    console.log(`MonogDB conntected successfully: ${status.connection.host}`);
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
};

export default conntectDB;
