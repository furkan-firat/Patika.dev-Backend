import mongoose from "mongoose";
//Create schema
const PostSchema = new mongoose.Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
