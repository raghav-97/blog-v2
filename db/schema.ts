const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema({
  email: String,
  password: String,
  first_name: String,
  last_name: String,
  username: String,
});

const PostSchema = new Schema({
  title: String,
  content: String,
  author: ObjectId,
  created_at: Date,
});

const UserModel = mongoose.model("User", UserSchema);
const PostModel = mongoose.model("Post", PostSchema);

module.exports = {
  UserModel,
  PostModel,
};
