const userService = require("../services/user.service");
const ApiResponse = require("../utils/ApiResponse");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(new ApiResponse(true, users));
  } catch (error) {
    next(error);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json(new ApiResponse(true, user));
    res.status(200).json(new ApiResponse(true, user));
  } catch (error) {
    next(error);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(new ApiResponse(true, user));
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    if (!user)
      return res
        .status(404)
        .json(new ApiResponse(false, null, "User not found"));
    res.status(200).json(new ApiResponse(true, user));
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    if (!user)
      return res
        .status(404)
        .json(new ApiResponse(false, null, "User not found"));
    res.status(200).json(new ApiResponse(true, user, "User deleted"));
  } catch (error) {
    next(error);
  }
};
