import express from "express";
import config from "./config/index.js";
import productRoute from "./routes/product.route.js";

const app = express();

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
