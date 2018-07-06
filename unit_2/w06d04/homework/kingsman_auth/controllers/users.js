const express = require("express");
const router = express.Router();
const User = require("../models/users.js");
const bcrypt = require("bcrypt");

router.get("/new", (req, res) => {
  if(req.session.currentUser){
    res.render("users/new.ejs");
  } else {
    res.redirect("/");
  }
});

router.post("/", (req, res) => {
  const myArray = req.body.messages.split(",");
  req.body.messages = myArray.map( x => x.trim() );
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  User.create(req.body, (err, createdUser) => {
    // req.session.currentUser = createdUser;
    res.redirect("/");
  });
});

module.exports = router;
