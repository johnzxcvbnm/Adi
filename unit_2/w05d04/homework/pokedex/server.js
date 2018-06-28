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

app.get("/", (req, res) => {
  res.send("YOLO");
});
