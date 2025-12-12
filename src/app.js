import express from "express";
import bodyParser from "body-parser";

import config from "./config/config.js";
import conntectDB from "./config/database.js";

import auth from "./middlewares/auth.js";
import authRoute from "./routes/auth.route.js";
import logger from "./middlewares/logger.js";
import productRoute from "./routes/product.route.js";
import roleBasedAuth from "./middlewares/roleBasedAuth.js";
import userRoute from "./routes/user.route.js";
import { ROlE_ADMIN } from "./constants/roles.js";

const app = express();

conntectDB();

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
app.use("/", auth, roleBasedAuth(ROlE_ADMIN), userRoute);
app.use("/", authRoute);
app.use("/", productRoute);

//creating servers
app.listen(config.port, () => {
  console.log(`Server running at port: ${config.port}...`);
});
