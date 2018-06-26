const express = require("express");
const request = require("request");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

app.get("/", (request, response) => {
  response.send("Left Blank");
});

app.get("/rats", (req, res) => {
  res.send("Rats!");
});

app.get("/violations", (req, res) => {
  res.send("Violations");
});

const myFunction = (response, otherFunction) => {
  request("https://data.cityofnewyork.us/resource/3q43-55fe.json", (error, res, body) => {
    const myJ = JSON.parse(body);
    otherFunction(response, myJ[0]["descriptor"], myJ[0]["borough"]);
  });
}

const printFunction = (response, des, borough) => {
  response.send(`<h3>Descriptor: ${question}?</h3>
                 <h3>Answer: ${answer}!</h3>`);
}

app.get("/request", (req, res) => {
  myFunction(res, printFunction);
});
