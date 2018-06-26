const express = require("express");
const app = express();
const port = 3000;

// const superheros = ["Superman", "Wonder Woman", "Black Panther"];

const superheros = [
  {
    name: "Superman",
    powers: ["Flight", "Superhuman Strength", "Good Hair"]
  },
  {
    name: "Wonder Woman",
    powers: ["Lasso Thing", "Superhuman Strength", "Being a Woman"]
  },
  {
    name: "Black Panther",
    powers: ["Killer Claws", "Superhuman Strength", "Sweet Tech", "Fourth Item"]
  }
]

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

app.get("/", (request, response) => {
  response.send("Here to save the day...");
})

app.get("/superheros", (req, res) => {
  res.send(`Superheros are: ${superheros}`);
});

app.get("/superheros/:index", (req, res) => {
  const myHero = superheros[req.params.index];
  let myRes = `<h1>Name: ${myHero.name}</h1>
               <h3>Powers:</h3><ul>`;
  for(let i of myHero.powers){
    myRes += `<li>${i}</li>`;
  }
  myRes += `</ul>`;

  res.send(myRes);
});
