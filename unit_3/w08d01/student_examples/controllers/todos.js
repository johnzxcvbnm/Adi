const express = require("express");
const Todos = require("../models/todos.js");
const router = express.Router();

router.get("/", (req, res) => {
  // res.send("index");
  Todos.find({}, (err, foundTodos) => {
    res.json(foundTodos);
  });
});

router.delete("/:id", (req, res) => {
  Todos.findByIdAndRemove(req.params.id, (err, deletedTodo) => {
    res.json(deletedTodo);
  });
});

router.put("/:id", (req, res) => {
  Todos.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTodo) => {
    res.json(updatedTodo);
  });
});

router.post("/", (req, res) => {
  Todos.create(req.body, (err, createdTodo) => {
    res.json(createdTodo); //.json() will send proper headers in response so client knows it's json coming back
  });
});

module.exports = router;
