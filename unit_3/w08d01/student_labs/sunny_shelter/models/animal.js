const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  name: String,
  species: String,
  breed: String,
  gender: String,
  image: String,
  age: Number,
  adopted: Boolean
});

module.exports = mongoose.model("Animal", animalSchema);
