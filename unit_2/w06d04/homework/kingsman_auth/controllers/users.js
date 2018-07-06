const express = require("express");
const router = express.Router();
const User = require("../models/users.js");

router.get("/new", (req, res) => {
  res.render("users/new.ejs");
});

router.post("/", (req, res) => {
  const myArray = req.body.messages.split(".");
  req.body.messages = myArray.map( x => x.trim() );
  User.create(req.body, (err, createdUser) => {
    res.send(createdUser);
  });
});

module.exports = router;
