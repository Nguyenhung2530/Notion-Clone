const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
  {
    post: {
      type: String,
      minlength: 6,
      required: true,
      unique: true,
    },
  },
  {
    collection: "Post",
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
