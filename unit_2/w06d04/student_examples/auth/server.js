const express = require("express");
const mongoose = require("mongoose");
const app = express();
const session = require("express-session");
const methodOverride = require("method-override");

app.use(session({
  secret: "feemeseymour",
  resave: false,
  saveUninitialized: false
}));

const port = 3000;
app.use( methodOverride( "_method" ) );
app.use( express.urlencoded( {extended: false} ) );

const usersController = require("./controllers/users.js");
app.use("/users", usersController);

const sessionsController = require("./controllers/sessions.js");
app.use("/sessions", sessionsController);



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.render("index.ejs", {
    currentUser: req.session.currentuser
  });
});

app.get("/app", (req, res) => {
  if(req.session.currentuser){
    res.send("The PartY");
  } else {
    res.redirect("/sessions/new");
  }
});

mongoose.connect("mongodb://localhost:27017/auth");

mongoose.connection.once("open", () => {
  console.log("Connected to Mongo");
});
