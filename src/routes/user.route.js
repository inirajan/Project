import express from "express";

import userController from "../controllers/user.controller.js";
import userSchema from "../libs/schemas/user.js";

const router = express.Router();

router.get("/api/users", userController.getUsers);
router.post("/api/users", validator(userSchema), userController.createUser);

export default router;
