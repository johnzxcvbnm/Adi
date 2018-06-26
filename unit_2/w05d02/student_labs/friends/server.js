const express = require("express");
const app = express();
const port = 3000;

const friends = [
  {
    name: "Jordan",
    age: 28,
    location: "Dallas",
    eyeColor: "Green",
    hairColor: "Brown"
  },
  {
    name: "Katy",
    age: "Best not to ask",
    location: "Dallas",
    eyeColor: "Brown",
    hairColor: "Brown"
  },
  {
    name: "Mr. Kitty",
    age: 2,
    location: "Dallas",
    eyeColor: "Yellow",
    hairColor: "Black"
  }
];

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

app.get("/", (request, response) => {
  response.send("Left Blank");
});

app.get("/friends", (req, res) => {
  res.send(friends);
});

app.get("/friends/:index", (req, res) => {
  const myFriend = friends[req.params.index];
  let myRes = `<h2>My Friend</h2>`;
  for(let i in myFriend){
    myRes += `<h4>${i}: ${myFriend[i]}</h4>`;
  }
  res.send(myRes);
});
