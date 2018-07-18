const mongoose = require("mongoose");

const websiteSchema = new mongoose.Schema({
  title: { type: String, required: true},
  url: { type: String, unique: true, required: true},
  owner: String
});

module.exports = mongoose.model("Website", websiteSchema);
