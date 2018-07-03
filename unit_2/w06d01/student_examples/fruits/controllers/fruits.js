const express = require("express");
const router = express.Router();
const Fruit = require("../models/fruits.js");


router.post("/", (req, res) => {
  if(req.body.readyToEat === "on"){
    req.body.readyToEat = "true";
  } else {
    req.body.readyToEat = "false";
  }

  Fruit.create(req.body, (error, createdFruit) => {
    res.redirect("/fruits");
  });
});

router.delete("/:id", (req, res) => {
  Fruit.findByIdAndRemove( req.params.id, (err) => {
    res.redirect("/fruits");
  });
});

router.put("/:id", (req, res) => {
  const myFruit = req.body;
  if(myFruit.readyToEat === "on"){
    myFruit.readyToEat = true;
  } else {
    myFruit.readyToEat = false;
  }

  Fruit.findByIdAndUpdate( req.params.id,
    req.body, (err) => {
    res.redirect(`/fruits/${req.params.id}`);
  });
});


router.get("/:id/edit", (req, res) => {
  Fruit.findById( req.params.id, (err, myFruit) => {
    res.render("edit.ejs", {
      fruit: myFruit
    });
  });
});

router.get("/seed", (req, res) => {
  Fruit.create(
    [
      {
        name: "grapefruit",
        color: "pink",
        readyToEat: true
      },
      {
        name: "avacado",
        color: "green",
        readyToEat: false
      },
      {
        name: "grape",
        color: "purple",
        readyToEat: true
      }
    ],
    (err, data) => {
      res.redirect("/fruits");
    }
  )
})

router.get("/new", (req, res) => {
  res.render("new.ejs");
});

router.get("/:id", (req, res) => {
  Fruit.findById(req.params.id, (err, fruit) => {
    res.render("show.ejs", {
      fruit: fruit
    });
  });
});

router.get("/", (req, res) => {
  Fruit.find( {}, (error, allFruits) => {
    res.render("index.ejs", {
      fruits: allFruits
    });
  });
});

router.get("/", (req, res) => {
  res.redirect("/fruits");
});

module.exports = router;
