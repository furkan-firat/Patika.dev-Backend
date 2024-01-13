import Post from "../models/Post.js";

export const getAllPosts = async (req, res) => {
  const posts = await Post.find({});
  res.render("index", {
    posts,
  });
};

export const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("post", {
    post,
  });
};

export const createPost = async (req, res, next) => {
  await Post.create(req.body);
  res.redirect("/");
};

export const updatePost = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  post.title = req.body.title;
  post.detail = req.body.detail;
  post.save();

  res.redirect(`/posts/${req.params.id}`);
};

export const deletePost = async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  res.redirect("/");
};
