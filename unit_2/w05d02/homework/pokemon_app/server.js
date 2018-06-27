const express = require("express");
const app = express();
const port = 3000;

const pokemon = require("./models/pokemon.js");

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (request, response) => {
  response.send("Left Blank");
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});
