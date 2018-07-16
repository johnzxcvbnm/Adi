//Dependancies
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

//Middleware
app.use(express.json());
app.use(express.static("public"));

//Controllers
const websiteController = require("./controllers/websites.js");
app.use("/bookmarker", websiteController);

//Listening port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

mongoose.connect("mongodb://localhost:27017/bookmarker", { useNewUrlParser: true } );
mongoose.connection.once("open", () => {
  console.log("Connected to Mongoose!  Quack!");
});
