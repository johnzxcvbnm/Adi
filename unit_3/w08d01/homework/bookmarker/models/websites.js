const mongoose = require("mongoose");

const websiteSchema = new mongoose.Schema({
  title: { type: String, required: true},
  url: { type: String, unique: true, required: true}
});

module.exports = mongoose.model("Website", websiteSchema);
