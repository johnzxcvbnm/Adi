const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");

app.use(session({
  secret: "feedmeseymour",
  resave: false,
  saveUninitialized: false
}));

app.use(express.json());
app.use(express.static("public"));

app.get("/app", (req, res) => {
  if(req.session.currentUser) {
    res.json(req.session.currentUser);
  } else {
    res.status(401).json({
      status: 401,
      message: "Not logged in"
    });
  }
});

const userController = require("./controllers/users.js");
app.use("/users", userController);

const sessionsController = require("./controllers/sessions.js");
app.use("/sessions", sessionsController);

const shelterController = require("./controllers/shelter.js");
app.use("/shelter", shelterController);

// app.get("/", (req, res) => {
//   res.redirect("/shelter");
// });

app.listen(3000, () => {
  console.log("Listening.....I can hear that!");
});

mongoose.connect("mongodb://localhost:27017/animalshelter", { useNewUrlParser: true } );
mongoose.connection.once("open", () => {
  console.log("Connected to Mongoose!  Quack!");
});
