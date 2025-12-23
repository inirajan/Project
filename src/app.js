import express from "express";
import bodyParser from "body-parser";
import multer from "multer";

import config from "./config/config.js";
import conntectDB from "./config/database.js";
import connectedCloudinary from "./config/cloudinary.js";

import auth from "./middlewares/auth.js";
import authRoute from "./routes/auth.route.js";
import logger from "./middlewares/logger.js";
import orderRoute from "./routes/order.route.js";
import productRoute from "./routes/product.route.js";
import userRoute from "./routes/user.route.js";

const app = express();

// const upload = multer({ dest: "uploads/" });
const upload = multer({ dest: multer.memoryStorage() });

conntectDB();

connectedCloudinary();

app.use(bodyParser.json());

app.use(logger);

app.get("/", (req, res) => {
  res.json({
    name: config.name,
    port: config.port,
    version: config.version,
    status: "OK",
  });
});

//root
app.use("/", upload.array("images", 5), productRoute);
app.use("/", auth, upload.single("image"), userRoute);
app.use("/", authRoute);
app.use("/", auth, orderRoute);

//creating servers
app.listen(config.port, () => {
  console.log(`Server running at port: ${config.port}...`);
});
