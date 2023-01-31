const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//constructor de nuestro modelo Messages
const mySchema = new Schema({
  name: String,
});

const modelUser = mongoose.model("User", mySchema);
module.exports = modelUser;
