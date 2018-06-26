
const express = require("express");
const app = express();

//Port Entry
const port = 3000;

//Listener
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

//Default Route
app.get("/", (request, response) => {
  response.send("Hello World");
});

//Greeting Route
app.get("/greeting", (req, res) => {
  res.send("Hello, stranger");
});

//Greeting Route with a parameter
app.get("/greeting/:name", (req, res) => {
  if(req.params.name){
    res.send(`Wow!  Hello there, ${req.params.name}`);
  } else {
    res.send(`Hi`);
  }
});
