//Dependancies
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const session = require("express-session");

app.use(session({
  secret: "feedmeseymour",
  resave: false,
  saveUninitialized: false
}));

//Middleware
app.use(express.json());
app.use(express.static("public"));

app.get("/log", (req, res) => {
  if(req.session.currentUser){
    res.json(req.session.currentUser);
  } else {
    res.status(401).json({
      status: 401,
      message: "Not logged in"
    });
  }
});

//Controllers
const websiteController = require("./controllers/websites.js");
app.use("/bookmarker", websiteController);

const userController = require("./controllers/users.js");
app.use("/users", userController);

const sessionsController = require("./controllers/sessions.js");
app.use("/sessions", sessionsController);

//Listening port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

mongoose.connect("mongodb://localhost:27017/bookmarker", { useNewUrlParser: true } );
mongoose.connection.once("open", () => {
  console.log("Connected to Mongoose!  Quack!");
});
