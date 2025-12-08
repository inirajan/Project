import authService from "../services/auth.service";

const login = async (req, res) => {
  try {
    const data = await authService.login(req.body);

    res.json(data);
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
