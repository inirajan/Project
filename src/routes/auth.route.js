import express from "express";

import authController from "../controllers/auth.controller.js";
import validate from "../middlewares/validator.js";
import registerSchema from "../libs/schemas/auth.js";
import loginSchema from "../libs/schemas/auth.js";
import forgetPasswordSchema from "../libs/schemas/auth.js";
import resetPasswordSchema from "../libs/schemas/auth.js";

const router = express.Router();

router.post("/api/login", validate(loginSchema), authController.login);

router.post("/api/register", validate(registerSchema), authController.register);

router.post(
  "/api/forgot-password",
  validate(forgetPasswordSchema),
  authController.forgetPassword
);

router.post(
  "/api/rest-password",
  validate(resetPasswordSchema),
  authController.resetPassword
);

export default router;
