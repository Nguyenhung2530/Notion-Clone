const authService = require("../services/auth.service");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");

exports.register = asyncHandler(async (req, res) => {
  const user = await authService.register(req.body);
  res.status(201).json(
    new ApiResponse(
      true,
      {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      "User registered successfully"
    )
  );
});

exports.login = asyncHandler(async (req, res) => {
  const { user, accessToken, refreshToken } = await authService.login(req.body);
  res.status(200).json(
    new ApiResponse(
      true,
      {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        accessToken,
        refreshToken,
      },
      "Login successful"
    )
  );
});

exports.refreshToken = asyncHandler(async (req, res) => {
  const { refreshToken } = req.body;
  const newAccessToken = await authService.refresh(refreshToken);
  res
    .status(200)
    .json(
      new ApiResponse(true, { accessToken: newAccessToken }, "Token refreshed")
    );
});
