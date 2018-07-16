const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.static("public"));

const shelterController = require("./controllers/shelter.js");
app.use("/shelter", shelterController);

// app.get("/", (req, res) => {
//   res.redirect("/shelter");
// });

app.listen(3000, () => {
  console.log("Listening.....I can hear that!");
});

mongoose.connect("mongodb://localhost:27017/animalshelter", { useNewUrlParser: true } );
mongoose.connection.once("open", () => {
  console.log("Connected to Mongoose!  Quack!");
});
