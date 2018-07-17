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
  User.findOne({ username: req.body.username}, (err, foundUser) => {
    if(foundUser === null){
      res.status(401).json({
        status: 401,
        message: "Login Failed"
      });
    } else {
      if( bcrypt.compareSync( req.body.password, foundUser.password) ){
        req.session.currentUser = foundUser;
        res.status(201).json({
          status: 201,
          message: "Session Created"
        });
      } else {
        res.status(401).json({
          status: 401,
          message: "Login Failed"
        })
      }
    }
  })
})

module.exports = router;
