
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

//Fibonacci
app.get("/fibonacci/:input", (req, res) => {
  //Create two initial numbers for the sequence
  let num1 = 0;
  let num2 = 1;

  //Create a variable to swap with
  let swap = 0;

  //Get the user input and turn it into an int
  const myInput = parseInt(req.params.input);

  //While either number is less than the input
  //Cycle through the fibonacci sequence
  while(num2 < myInput){
    swap = num1 + num2;
    num1 = num2;
    num2 = swap;
  }

  //Error Testing
  // console.log(`Num1: ${num1}`);
  // console.log(`Num2: ${num2}`);
  // console.log(`MyInput: ${myInput}`);

  //If either number matches the input
  //Output that it is part of the sequence
  //Otherwise output that it is not part of the sequence
  if( (num1 === myInput) || (num2 === myInput) ){
    res.send("Very good.  It is Fibonacci!");
  } else {
    res.send("I can tell this is not a Fibonacci number");
  }
});
