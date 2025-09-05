const jwt = require("jsonwebtoken");
const ApiResponse = require("../utils/ApiResponse");
exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token)
    return res.status(401).json(new ApiResponse(false, "No token provided"));

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err)
      return res.status(403).json(new ApiResponse(false, "Invalid Token"));
    req.user = user;
    next();
  });
};

exports.isAdmin = (req, res, next) => {
  if (req.user.role != "admin") {
    return res.status(403).json(new ApiResponse(false, "Require admin role"));
  }
  next();
};
