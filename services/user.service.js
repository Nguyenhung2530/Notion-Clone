const User = require("../models/user.model");

class UserService {
  async getAllUsers() {
    return await User.find().select("-password");
  }

  async getUserById(id) {
    return await User.findById(id).select("-password");
  }

  async createUser(data) {
    return await User.create(data);
  }

  async updateUser(id, data) {
    return await User.findByIdAndUpdate(id, data, { new: true }).select(
      "-password"
    );
  }

  async deleteUser(id) {
    return await User.findByIdAndDelete(id).select("-password");
  }
}

module.exports = new UserService();
