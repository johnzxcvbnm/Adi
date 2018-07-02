//Dependencies
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const express = require("express");
const CapLog = require("./models/logs.js");

const app = express();

//Port Connection
const port = 3000;

//Middleware
app.use( methodOverride("_method") );
app.use( express.static("public") );
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

//Delete Routes
app.delete("/logs/:id", (req, res) => {
  CapLog.remove( { _id: req.params.id }, (err, myLog) => {
    res.redirect("/logs");
  });
});

//Get Routes
app.get("/logs/seed", (req, res) => {
  const mySeedData = [
    {
      title: "Start Mission",
      entry: "Today we started on a new mission.  To blow up space.  It'll be a very long and difficult mission, but only a captain as crazy as I am can do it.",
      shipIsBroken: false
    },
    {
      title: "Mars Landing",
      entry: "We landed on Mars this evening, to refuel and restock.  Unfortunately our pilot was drunk and crashed the ship on landing.  We will be here for a few days while repairs are under way.",
      shipIsBroken: true
    },
    {
      title: "Good-bye Pluto",
      entry: "We did it!  We blew up Pluto!  It was our first victory in this long war, but a well deserved one.  Next up, deep space, sector nine.",
      shipIsBroken: false
    }
  ];

  CapLog.create( mySeedData, (err, data) => {
    res.redirect("/logs");
  });
});

app.get("/logs/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/logs/:index", (req, res) => {
  CapLog.findById( req.params.index, (error, myLog) => {
    // res.send(myLog);
    res.render("show.ejs", {
      log: myLog
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
