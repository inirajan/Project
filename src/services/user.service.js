import User from "../models/User";

const createUser = async (data) => {
  return await User.create(data);
};

export default {
  createUser,
};
