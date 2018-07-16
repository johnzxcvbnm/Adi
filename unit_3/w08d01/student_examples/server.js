const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json()); //use .json() and not .urlencoded()
app.use(express.static("public"));

const todosController = require("./controllers/todos.js");
app.use("/todos", todosController);

app.listen(3000, () => {
  console.log("Listening....");
});

mongoose.connect("mongodb://localhost:27017/meancrud", { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("Connected to Mongoose!  Quack!");
});
