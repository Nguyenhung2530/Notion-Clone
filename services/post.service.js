const Post = require("../models/post.model");

class postService {
  async getPostById(id) {
    return await Post.findById(id);
  }
  async getPosts() {
    return await Post.find();
  }
  async createPost() {
    return await Post.create();
  }

  async updatePost(id) {
    return await Post.findByIdAndUpdate(id);
  }

  async deletePost(id) {
    return await Post.findByIdAndDelete(id);
  }
}

module.exports = new postService();
