
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

//Magic 8 Ball
app.get("/magic/:question", (req, res) => {
  //Magic Eight Ball Answers
  const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

  //Pull the Question Parameter
  const myQ = req.params.question;

  //Get a random 8 ball question
  const myAnswer = answers[Math.floor(Math.random() * answers.length)];

  res.send(`<h3>Question: ${myQ}?</h3>
            <h1>Answer: ${myAnswer}!!!</h1>`);
});
