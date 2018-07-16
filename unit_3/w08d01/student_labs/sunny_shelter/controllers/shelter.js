const express = require("express");
const Animal = require("../models/animal.js");
const router = express.Router();

router.get("/", (req, res) => {
  // res.send("Index");
  Animal.find({}, (err, foundAnimal) => {
    res.json(foundAnimal);
  });
});

router.post("/", (req, res) => {
  Animal.create(req.body, (err, createdAnimal) => {
    res.json(createdAnimal);
  });
});

router.delete("/:id", (req, res) => {
  Animal.findByIdAndRemove(req.params.id, (err, deletedAnimal) => {
    res.json(deletedAnimal);
  });
});

router.put("/:id", (req, res) => {
  Animal.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedAnimal) => {
    res.json(updatedAnimal);
  });
});

module.exports = router;
