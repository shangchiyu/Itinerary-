const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  img: {
    type: String
  },
  favourite :{
    type: String
  }
});
module.exports = mongoose.model("user", UserSchema);
