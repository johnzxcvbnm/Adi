const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const kingsmanSchema = Schema({
  name: String,
  password: String,
  messages: [String]
});

module.exports = mongoose.model("User", kingsmanSchema);
