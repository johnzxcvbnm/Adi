const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  img: String,
  price: Number,
  qty: Number
});

module.exports = mongoose.model("product", productSchema);
