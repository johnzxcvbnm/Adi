const express = require("express");
const app = express();

// app.get("/", (request, response) => {
//   response.send("Hello World!");
// });

app.listen(3000, () => {
  console.log("I am listening on port 3000");
});

app.get("/homer", (req, res) => {
  res.send("Doh!");
});

app.get("/marge", (req, res) => {
  res.send("Now homie...");
});

app.get("/bart", (req, res) => {
  res.send("Don't have a cow man");
});

app.get("/lisa", (req, res) => {
  res.send("I don't think we should be doing this....");
});

app.get("/maggie", (req, res) => {
  res.send("........(Maggie doesn't talk)");
});

app.get("/snowball-II", (req, res) => {
  res.send("Meow");
});

app.get("/santas-little-helper", (req, res) => {
  res.send("Boof");
});
