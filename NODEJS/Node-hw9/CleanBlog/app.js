const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const multer = require("multer"); // v1.0.5
const upload = multer(); // for parsing multipart/form-data
const ejs = require("ejs");

const Post = require("./models/Post");

//mw
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Connect DB
mongoose.connect("mongodb://127.0.0.1:27017/cleanblog-test-db");

app.get("/", async function (req, res) {
  const posts = await Post.find({});
  res.render("index", {
    posts,
  });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/post", function (req, res) {
  res.render("post");
});

app.get("/addPost", function (req, res) {
  res.render("addPost");
});

app.post("/posts", upload.array(), (req, res, next) => {
  Post.create(req.body);
  res.redirect("/");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
