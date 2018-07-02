//Dependencies
const mongoose = require("mongoose");
const express = require("express");
const CapLog = require("./models/logs.js");

const app = express();

//Port Connection
const port = 3000;

//Middleware
app.use( express.urlencoded( {extended: true} ) );

//Listen Routes
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//Post Routes
app.post("/logs/", (req, res) => {
  if(req.body.shipIsBroken === "on"){
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }

  CapLog.create(req.body, (error, createdLog) => {
    res.redirect("/logs");
  });
});

//Get Routes
app.get("/logs/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/logs/:index", (req, res) => {
  CapLog.find( { _id: req.params.index }, (error, myLog) => {
    // res.send(myLog);
    res.render("show.ejs", {
      log: myLog[0]
    });
  });
});

app.get("/logs", (req, res) => {
  CapLog.find( {}, (error, allLogs) => {
    res.render("index.ejs", {
      logs: allLogs
    });
  });
});

app.get("/", (req, res) => {
  res.redirect("/logs");
});

//Database Connections
mongoose.connect("mongodb://localhost:27017/captainslog");
mongoose.connection.once("open", () => {
  console.log("Connected to Mongo");
});
