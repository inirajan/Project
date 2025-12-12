const roleBasedAuth = (role) => {
  return (req, res, next) => {
    //roles(roles tha user can have like admin , merchent and users)

    if (req.user.roles.include(role)) return next();

    res.status(403).send("Access denied");
  };
};

export default roleBasedAuth;
