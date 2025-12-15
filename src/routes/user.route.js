import express from "express";

import userController from "../controllers/user.controller.js";
import userSchema from "../libs/schemas/user.js";
import validate from "../middlewares/validator.js";

const router = express.Router();

router.get("/api/users", userController.getUsers);
router.post("/api/users", validate(userSchema), userController.createUser);

export default router;
