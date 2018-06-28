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

//-------Delete Routes------//

//------Post Routes---------//

//------Get Routes----------//

app.get("/pokedex", (req, res) => {
  res.render("index.ejs", {
    pokemon: myPokemon
  });
});

app.get("/pokedex/new", (req, res) => {
  res.send("NEW POKEMON");
});

app.get("/pokedex/:index", (req, res) => {
  res.render("show.ejs", {
    index: req.params.index,
    pokemon: myPokemon[req.params.index - 1]
  });
});

app.get("/", (req, res) => {
  res.send(myPokemon);
});
