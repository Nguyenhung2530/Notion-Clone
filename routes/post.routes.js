const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller");
const { isAdmin, verifyToken } = require("../middlewares/auth");

router.get("/:id", postController.getPost);

router.get("/", isAdmin, postController.getAllPost);

router.post("/", postController.createPost);

router.put("/:id", isAdmin, postController.updatePost);

router.delete("/:id", isAdmin, postController.deletePost);

module.exports = router;
