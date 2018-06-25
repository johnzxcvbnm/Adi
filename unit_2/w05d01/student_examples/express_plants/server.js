//Dependencies
const express = require("express");

//Configuration
const app = express();
const port = 3000;

//"Database"
const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];

//Listen for a request at localhost:3000/
app.get("/", (req, res) => {
  //If request is made here, send this message
  res.send("Welcome to The Plant Express");
})

app.get("/hello/:firstname", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(`Hello ${req.query.title} ${req.params.firstname} in the year of ${req.query.year}`);
})

app.get("/hello/:firstname/:lastname", (req, res) => {
  // console.log(req);
  console.log(req.params);
  res.send(`Hello ${req.params.firstname} ${req.params.lastname}`);
});

app.get('/awesome', (req, res) => {
  res.send(`
    <h1>Plants are awesome!</h1>
    <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
  `);
});

//Dynamic route, should be a number, access a plant in the array
app.get("/:indexOfPlantsArray", (req, res) => {
  if(plants[req.params.index]){
    res.send(plants[req.params.indexOfPlantsArray]);
  } else {
    res.send("Cannot find anything at this index: " + req.params.indexOfPlantsArray);
  }
});

//Listen for requests at this port
app.listen(port, () => {
  console.log("Listening on port ", port);
});
