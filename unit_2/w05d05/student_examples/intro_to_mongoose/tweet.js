const mongoose = require("mongoose");
const Schema = mongoose.Schema; //create a shorthand for the mongoose schema constructor

// const fido = new Dog();

const tweetSchema = new Schema({
  title: String,
  body: String,
  author: String,
  likes: { type: Number, defualt: 0},
  deleted: {type: Boolean, default: false}
}, {timestamps: true});

//Creating Tweet class -- will be stored in 'tweets' collection.  Mongo does this for you automatically
const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
