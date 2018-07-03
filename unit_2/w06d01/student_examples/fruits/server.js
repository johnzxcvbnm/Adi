const mongoose = require('mongoose');
const express = require("express");
const methodOverride = require("method-override");
const app = express();

const port = 3000;

app.use( methodOverride("_method") );
app.use( express.urlencoded( {extended: true} ) );

const fruitsController = require("./controllers/fruits.js");
app.use("/fruits", fruitsController);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

mongoose.connect('mongodb://localhost:27017/basiccrud');
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});
