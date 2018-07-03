const mongoose = require('mongoose');
const express = require("express");
const Fruit = require("./models/fruits.js");
const app = express();

const port = 3000;


app.use( express.urlencoded( {extended: true} ) );

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.post("/fruits/", (req, res) => {
  if(req.body.readyToEat === "on"){
    req.body.readyToEat = "true";
  } else {
    req.body.readyToEat = "false";
  }

  Fruit.create(req.body, (error, createdFruit) => {
    res.redirect("/fruits");
  });
});

app.get("/fruits/seed", (req, res) => {
  Fruit.create(
    [
      {
        name: "grapefruit",
        color: "pink",
        readyToEat: true
      },
      {
        name: "avacado",
        color: "green",
        readyToEat: false
      },
      {
        name: "grape",
        color: "purple",
        readyToEat: true
      }
    ],
    (err, data) => {
      res.redirect("/fruits");
    }
  )
})

app.get("/fruits/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/fruits/:id", (req, res) => {
  Fruit.findById(req.params.id, (err, fruit) => {
    res.render("show.ejs", {
      fruit: fruit
    });
  });
});

app.get("/fruits", (req, res) => {
  Fruit.find( {}, (error, allFruits) => {
    res.render("index.ejs", {
      fruits: allFruits
    });
  });
});

app.get("/", (req, res) => {
  res.redirect("/fruits");
});

mongoose.connect('mongodb://localhost:27017/basiccrud');
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});
