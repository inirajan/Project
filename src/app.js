import express from "express";
import bodyParser from "body-parser";

import config from "./config/config.js";
import productRoute from "./routes/product.route.js";
import conntectDB from "./config/database.js";

const app = express();

conntectDB();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    name: config.name,
    port: config.port,
    version: config.version,
  });
});

//root
app.use("/", productRoute);

//creating servers
app.listen(config.port, () => {
  console.log(`Server running at port: ${config.port}`);
});
