const express = require("express");
const app = express();
app.use(express.static("public"));
const ejs = require("ejs");
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
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

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
