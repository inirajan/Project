import express from "express";

import userController from "../controllers/user.controller.js";
import validate from "../middlewares/validator.js";
import { ROLE_ADMIN } from "../constants/roles.js";
import { updateRolesSchema, userSchema } from "../libs/schemas/user.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";

const router = express.Router();

router.get("/api/users", roleBasedAuth(ROLE_ADMIN), userController.getUsers);

router.post(
  "/api/users",
  roleBasedAuth(ROLE_ADMIN),
  validate(userSchema),
  userController.createUser
);

router.patch("/api/users/profile-image", userController.updateProfileImage);

router.get("/api/users/me", userController.getLoggedInUser);

router.get(
  "/api/users/:id",
  roleBasedAuth(ROLE_ADMIN),
  userController.getUserById
);

router.put(
  "/api/users/:id",
  roleBasedAuth(ROLE_ADMIN),
  userController.updateUser
);

router.delete(
  "/api/users/:id",
  roleBasedAuth(ROLE_ADMIN),
  userController.deleteUser
);

router.put(
  "/api/users/:id/roles",
  roleBasedAuth(ROLE_ADMIN),
  validate(updateRolesSchema),
  userController.updateUserRoles
);

export default router;
