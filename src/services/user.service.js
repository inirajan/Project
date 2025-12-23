import { ROLE_ADMIN } from "../constants/roles.js";
import User from "../models/User.js";
import uploadFile from "../utils/fileUploder.js";
import authService from "./auth.service.js";

//Not required
const createUser = async (data) => {
  return await authService.register(data);
};

const getUsers = async () => {
  const { name, limit, offset } = query;

  const sort = query.sort ? JSON.parse(query.sort) : {};
  const filters = {};

  if (name) filters.name = { $regex: name, $optinon: "i" }; // Ilike match(case insensetive match)

  return await User.find(filters).sort(sort).limit(limit).skip(offset);
};

const updateProfileImage = async (id, file) => {
  const uploadedFile = await uploadFile([file]);

  return await User.findByIdAndUpdate(
    id,
    {
      profileImageUrl: uploadFile[0].url,
    },
    { new: true }
  );
};

const getUserById = async (id) => {
  const user = await User.findById(id);

  if (!user)
    throw {
      status: 404,
      message: "User not found.",
    };

  return user;
};

const updateUser = async (id, data, authUser) => {
  const user = await getUserById(id);

  if (authUser._id !== id && !authUser.roles.includes(ROLE_ADMIN))
    throw {
      status: 403,
      message: "Access denied.",
    };

  return await User.findByIdAndUpdate(
    id,
    {
      name: data?.name,
      email: data?.email,
      address: data?.address,
      phone: data?.phone,
    },
    { new: true }
  );
};

const deleteUser = async (id) => {
  await getUserById(id);

  await User.findByIdAndDelete(id);

  return "User deleted successfully.";
};

const updateUserRoles = async (id, roles) => {
  return await User.findByIdAndUpdate(id, { roles });
};

export default {
  createUser,
  getUsers,
  updateProfileImage,
  getUserById,
  updateUser,
  deleteUser,
  updateUserRoles,
};
