import bcrypt from "bcryptjs";

import ResetPassword from "../models/ResetPassword.js";
import User from "../models/User.js";
import config from "../config/config.js";
import sendEmail from "../utils/email.js";

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

  if (!user.isActive)
    throw {
      status: 400,
      message: "User deactivated.",
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

const forgotPassword = async (email) => {
  const user = await User.findOne({ email });

  // Never send message saying if user is found.
  if (!user)
    throw {
      status: 404,
      message: "User not found.",
    };

  // generating token
  const token = crypto.randomUUID();

  await ResetPassword.create({
    userId: user._id,
    token,
  });

  // link:<app-url>/reset-password?userId=<userId>= <token>
  const resetPasswordLink = `${config.appUrl}/reset-password?userId=${user._id}&token=${token}`;

  //Send email
  sendEmail(email, {
    subject: "Reset password link",
    html: `
      <div style="padding: 16px; font-family: sans-serif">
        <h1>Please click the link to reset your password.</h1>
        <a
          href="${resetPasswordLink}"
          style="
            background-color: dodgerblue;
            color: white;
            text-decoration: none;
            padding: 10px 32px;
            border-radius: 8px;
          "
        >
          Reset password
        </a>
      </div>
    `,
  });

  return { message: "Reset password link sent successfully." };
};

const resetPassword = async (userId, token, password) => {
  // verfiy user and token
  const data = await ResetPassword.findOne({
    userId,
    expiresAt: { $gt: Date.now() },
  }).sort({ createdAt: -1 }); // for using latest

  if (!data || data.token != token) {
    throw { sataus: 400, message: "Invalid or expired token." };
  }

  if (data.isUsed) {
    throw { sataus: 400, message: "Link already used." };
  }

  //reset password
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(data.password, salt);

  await User.findByIdAndUpdate(userId, {
    password: hashPassword,
  });

  await ResetPassword.findByIdAndUpdate(data._id, {
    isUsed: true,
  });

  return { message: "  Password reset successful." };
};

export default {
  register,
  login,
  forgotPassword,
  resetPassword,
};
