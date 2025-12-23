const logger = (req, res, next) => {
  const url = req.orginalUrl;
  const method = req.method;

  console.log(`Method: ${method} & URL: ${url}`);

  next();
};

export default logger;
