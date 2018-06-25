const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
} );

app.get("/somedata", (req, res) => {
  res.send("Here is your information!!!");
});

app.listen(3000, () => {
  console.log("I am listening on port 3000");
});
