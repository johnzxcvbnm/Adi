const express = require("express");
const router = express.Router();
const User = require("../models/users.js");
const bcrypt = require("bcrypt");

router.delete("/", (req, res) => {
  req.session.destroy( () => {
    res.status(200).json({
      status: 200,
      message: "Logout Complete"
    });
  });
});

router.post("/", (req, res) => {
  User.findOne( { username: req.body.username }, (err, foundUser) => {
    if(foundUser === null){
      console.log("Phase 1");
      res.status(401).json({
        status: 401,
        message: "You Login Failed"
      });
    } else {
      console.log("Phase 2");
      if( bcrypt.compareSync( req.body.password, foundUser.password ) ){
        console.log("Phase 3");
        req.session.currentUser = foundUser;
        res.status(201).json({
          status: 201,
          message: "Session Created"
        });
      } else {
        res.stutus(401).json({
          status: 401,
          message: "Login Failed"
        });
      }
    }
  });
});

module.exports = router;
