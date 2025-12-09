import User from "../models/User.js";
import bcrypt from "bcryptjs";

const login = async (data) => {
  // const user = await User.findOne({ email: data.email }); // login using email

  const user = await User.findOne({
    $or: [{ email: data?.email }, { phone: data?.phone }],
  }); //login using email or phone

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

  return user;
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

  //generating salt
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(data.password, salt);

  return await User.create({
    name: data.name,
    email: data.email,
    phone: data.phone,
    address: data.address,
    password: hashPassword,
  });
};

export default {
  register,
  login,
};
