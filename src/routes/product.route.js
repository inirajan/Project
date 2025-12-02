import express from "express";

const router = express.Router();

router.get("/api/products", (req, res) => {
  res.send(["Iphone", "Samsung"]);
});

router.get("/api/one", (req, res) => {
  res.send({
    name: "Samsung",
  });
});

router.get("/api/two", (req, res) => {
  res.send({
    name: "OnePlus",
    models: "A1",
  });
});
export default router;
