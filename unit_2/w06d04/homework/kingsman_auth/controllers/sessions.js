const express = require("express");
const router = express.Router();
const User = require("../models/users.js");
const bcrypt = require("bcrypt");

router.get("/new", (req, res) => {
  res.render("sessions/new.ejs");
});

router.post("/", (req, res) => {
  User.findOne( { name: req.body.name }, (err, foundUser) => {
    if(foundUser === null){
      res.send("No such user");
    } else {
      if( bcrypt.compareSync(req.body.password, foundUser.password) ){
        // res.send("Logging In");
        req.session.currentUser = foundUser;
        res.redirect("/");
      } else {
        res.send("Wrong Password");
      }
    }
  });
});

router.delete("/", (req, res) => {
  req.session.destroy( () => {
    res.redirect("/");
  });
});

module.exports = router;
