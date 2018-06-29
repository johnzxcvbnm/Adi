//-------Global Variables---------//
const express = require("express");
const methodOverride = require("method-override");
const myPokemon = require("./models/pokemon.js");
const app = express();
const port = 3000;

//-------Middle Ware-------//
app.use( methodOverride("_method") );
app.use( express.static("public") );
app.use( express.urlencoded( {extended:false} ) );

//------Listen Route--------//
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//-------Edit Routes--------//
app.put("/pokedex/:index", (req, res) => {
  // console.log(req.body);
  const myStats = {
              hp: req.body.hp,
              attack: req.body.attack,
              defense: req.body.defense,
              spattack: req.body.spattack,
              spdefense: req.body.spdefense,
              speed: req.body.speed
              };
  req.body.stats = myStats;
  myPokemon[req.params.index - 1] = req.body;
  res.redirect("/pokedex");
});

//-------Delete Routes------//
app.delete("/pokedex/:index", (req, res) => {
  myPokemon.splice(req.params.index - 1, 1);
  res.redirect("/pokedex");
})

//------Post Routes---------//
app.post("/pokedex", (req, res) => {
  console.log(req.body);
  const myStats = {
              hp: req.body.hp,
              attack: req.body.attack,
              defense: req.body.defense,
              spattack: req.body.spattack,
              spdefense: req.body.spdefense,
              speed: req.body.speed
              };
  req.body.stats = myStats;
  myPokemon.push(req.body);
  res.redirect("/pokedex");
});

//------Get Routes----------//
app.get("/pokedex", (req, res) => {
  res.render("index.ejs", {
    pokemon: myPokemon
  });
});

app.get("/pokedex/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/pokedex/:index/edit", (req, res) => {
  // res.send("I AM HERE");
  res.render("edit.ejs", {
    index: req.params.index,
    pokemon: myPokemon[req.params.index - 1]
  });
  // res.render("edit.ejs", {
  //   index: req.params.index,
  //   pokemon: myPokemon[req.params.index - 1]
  // });
});

app.get("/pokedex/:index", (req, res) => {
  res.render("show.ejs", {
    index: req.params.index,
    pokemon: myPokemon[req.params.index - 1]
  });
});

app.get("/", (req, res) => {
  res.redirect("/pokedex");
});
