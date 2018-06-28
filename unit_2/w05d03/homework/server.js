const myBudget = require("./models/budget.js");
const express = require("express");
const app = express();
const port = 3000;

app.use( express.static( "public" ) );
app.use( express.urlencoded( {extended:false} ) );

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.post("/show", (req, res) => {
  myBudget.push(req.body);
  res.redirect("/show");
})

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/show", (req, res) => {
  res.render("index.ejs", {
    budget: myBudget
  });
});

app.get("/show/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/show/:index", (req, res) => {
  // res.send("You made it!" + req.params.index);
  res.render("show.ejs", {
    budget: myBudget[req.params.index]
  });
});
