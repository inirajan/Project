import express from "express";

import authController from "../controllers/auth.controller.js";
import validate from "../middlewares/validator.js";
import userSchema from "../libs/schemas/user.js";
import loginSchema from "../libs/schemas/auth.js";

const router = express.Router();

router.post("/api/login", validate(loginSchema), authController.login);

router.post("/api/register", validate(userSchema), authController.register);

export default router;
