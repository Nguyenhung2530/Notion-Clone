const ApiResponse = require("../utils/ApiResponse");

module.exports = (err, res, req, next) => {
  console.error("Error:", err);

  const status = err.statuscode || 500;
  const message = err.isOperational ? err.message : "Internal sever error";

  res.status(status).json(new ApiResponse(false, null, message));
};
