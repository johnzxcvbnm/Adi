//Dependancies
const express = require("express");
const Website = require("../models/websites.js");
const router = express.Router();

//Get Routes
router.get("/", (req, res) => {
  // res.send("Index");
  
  //Find all websites and sort them by title
  Website.find( {} ).sort( { title: 1 } ).exec( (err, foundWebsite) => {
    res.json(foundWebsite);
  });
});

//Delete Routes
router.delete("/:id", (req, res) => {
  Website.findByIdAndRemove(req.params.id, (err, deletedWebsite) => {
    res.json(deletedWebsite);
  });
});

//Put Routes
router.put("/:id", (req, res) => {
  Website.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedWebsite) => {
    res.json(updatedWebsite);
  });
});

//Post Routes
router.post("/", (req, res) => {
  Website.create(req.body, (err, createdWebsite) => {
    res.json(createdWebsite);
  });
});

module.exports = router;
