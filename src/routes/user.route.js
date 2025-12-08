import express from "express";

import userController from "../controllers/user.controller.js";

const router = express.Router();

router.post("/api/users", userController.createUser);

export default router;
