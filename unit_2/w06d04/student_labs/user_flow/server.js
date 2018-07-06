const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const session = require("express-session");
const methodOverride = require("method-override");

app.use(session({
  secret: "feedmeseymour",
  resave: false,
  saveUninitialized: false
}));

app.use( methodOverride( "_method" ) );
app.use( express.urlencoded( {extended: false} ) );

const usersController = require("./controllers/users.js");
app.use("/users", usersController);

const sessionsController = require("./controllers/sessions.js");
app.use("/sessions", sessionsController);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/secret", (req, res) => {
  if(req.session.currentUser){
    res.send("The Secret Store");
  } else {
    res.redirect("/sessions/new");
  }
});

app.get("/", (req, res) => {
  res.render("index.ejs", {
    currentUser: req.session.currentUser
  });
});

mongoose.connect("mongodb://localhost:27017/myNewAuth");

mongoose.connection.once("open", () => {
  console.log("Connected to Mongo");
});
