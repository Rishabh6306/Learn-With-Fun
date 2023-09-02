const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  headline: String,
  content: String,
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;