import express from "express";

import authController from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/api/login/", authController.login);

router.post("/api/register/", authController.register);

export default router;
