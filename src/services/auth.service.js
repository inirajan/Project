import User from "../models/User.js";
import bcrypt from "bcryptjs";
// import jwt from "../utils/jwt.js";

const login = async (data) => {
  // const user = await User.findOne({ email: data.email }); // login using email

  //login using email or phone
  const user = await User.findOne({
    $or: [{ email: data?.email }, { phone: data?.phone }],
  });

  if (!user)
    throw {
      status: 404,
      message: "User not found",
    };

  //checking password (data.password ( password save in database), user.password("password of user"))
  const isPasswordMatch = bcrypt.compareSync(data.password, user.password);

  if (!isPasswordMatch)
    throw {
      status: 400,
      message: "Incorrect email or passwrod",
    };

  //adding token in logged in
  // const token = jwt.createJWT({
  //   name: user.name,
  //   email: user.email,
  //   phone: user.phone,
  //   address: user.address,
  //   roles: user.roles,
  // });

  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    address: user.address,
    roles: user.roles,
    isActive: user.isActive,
  };
};

const register = async (data) => {
  // const user = await User.findOne({ email: data.email })  finding user

  const user = await User.findOne({
    $or: [{ email: data?.email }, { phone: data?.phone }],
  });

  if (user)
    throw {
      statusCode: 409,
      message: "User already exits.",
    };

  //generating salt and hashPassword
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(data.password, salt);

  const createData = await User.create({
    name: data.name,
    email: data.email,
    phone: data.phone,
    address: data.address,
    password: hashPassword,
  });

  return createData;
};

export default {
  register,
  login,
};
