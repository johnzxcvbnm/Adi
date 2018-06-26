
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

//Tip Calculator
app.get("/tip/:total/:percentage", (req, res) => {
  //Get the parameters and turn them into a float
  let myTotal = parseFloat(req.params.total);
  let myPercentage = parseFloat(req.params.percentage);

  //If the total is less than zero
  //or if the total is not a number
  //Set the total to Zero
  if( myTotal < 0 || isNaN(myTotal) ){
    myTotal = 0;
  }

  //If the percentage is less than zero
  //or if the percentage is not a number
  //Set the percentage to Twenty
  if( myPercentage < 0 || isNaN(myPercentage) ){
    myPercentage = 20;
  }

  //Output the tip total
  res.send(`<p>Total: $${myTotal}</p>
            <p>Tip Percentage: ${myPercentage}%</p>
            <p>Tip Total: $${myTotal * (myPercentage / 100)}</p>`);
});
