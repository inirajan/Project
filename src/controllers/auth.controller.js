import authService from "../services/auth.service.js";
import jwt from "../utils/jwt.js";

const login = async (req, res) => {
  try {
    const data = await authService.login(req.body);

    const token = jwt.createJWT(data);
    console.log(token);

    res.cookie("authToken", token, { maxAge: "1d" });

    res.json({ data: data, message: "User logged In." });
  } catch (error) {
    res.status(error.status || 404).send(error?.message);
  }
};

const register = async (req, res) => {
  try {
    const data = await authService.register(req.body);

    res.json(data);
  } catch (error) {
    res.status(error.status || 409).send(error?.message);
  }
};

const forgetPassword = async (req, res) => {
  try {
    const data = await authService.forgotPassword(req.body.email);

    res.json(data);
  } catch (error) {
    res.status(error.status || 404).send(error?.message);
  }
};

const resetPassword = async (req, res) => {
  const query = req.query;

  if (!query.token || !query.userId) {
    return res.status(400).send("Token & user Id is required.");
  }

  try {
    const data = await authService.resetPassword(
      query.userId,
      query.token,
      req.body.password
    );

    res.json(data);
  } catch (error) {
    res.status(error.status || 404).send(error?.message);
  }
};

export default {
  login,
  register,
  forgetPassword,
  resetPassword,
};
