import Post from "../models/Post.js";

export const getAboutPage = (req, res) => {
  res.render("about");
};

export const getAddPostPage = (req, res) => {
  res.render("addPost");
};

export const getEditPage = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.render("edit", {
    post,
  });
};
