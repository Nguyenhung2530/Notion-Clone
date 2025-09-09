const postService = require("../services/post.service");
const ApiResponse = require("../utils/ApiResponse");

exports.getPost = async (req, res, next) => {
  try {
    const post = await postService.getPostById(req.params.id);
    if (!post)
      return res.status(400).json(new ApiResponse(false, "Post not found"));
    res.status(200).json(new ApiResponse(true, post));
  } catch (error) {
    next(error);
  }
};

exports.getAllPost = async (req, res, next) => {
  try {
    const post = await postService.getPosts();
    if (!post)
      return res.status(400).json(new ApiResponse(false, "Posts not found"));
    res.status(200).json(new ApiResponse(true, post));
  } catch (error) {
    next(error);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const post = await postService.createPost();
    res
      .status(200)
      .json(new ApiResponse(true, post, "Create Post Succesfully"));
  } catch (error) {
    next(error);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const post = await postService.updatePost(req.params.id);
    if (!post)
      return res
        .status(400)
        .json(new ApiResponse(false, null, "Post not found"));
    res.status(200).json(new ApiResponse(true, post, "Updated Post"));
  } catch (error) {
    next(error);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const post = await postService.deletePost(req.params.id);
    if (!post)
      return res
        .status(400)
        .json(new ApiResponse(false, null, "Post not founde"));
    res.status(200).json(new ApiResponse(true, post, "Deleted Post"));
  } catch (error) {
    next(error);
  }
};
