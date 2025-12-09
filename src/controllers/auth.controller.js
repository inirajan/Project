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

export default {
  login,
  register,
};
