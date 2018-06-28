const express = require("express");
const methodOverride = require("method-override");
const myPeps = require("./models/data.js");
const app = express();
const port = 3000;

app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));

//Listen
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

//Edit Routes
app.put("/main/:index", (req, res) => {
  if(req.body.protect === "on"){
    req.body.protect = true;
  } else {
    req.body.protect = false;
  }

  myPeps[req.params.index] = req.body;
  res.redirect("/main");
})

//Delete Routes
app.delete("/main/all", (req, res) => {
  for(let i = myPeps.length - 1; i >= 0; i--){
    if(!myPeps[i].protect){
      myPeps.splice(i, 1);
    }
  }
  // myPeps.splice(0);
  res.redirect("/main");
})

app.delete("/main/:index", (req, res) => {
  if(!myPeps[req.params.index].protect){
    myPeps.splice(req.params.index, 1);
  }
  res.redirect("/main");
})

//Post Routes
app.post("/main", (req, res) => {
  if(req.body.protect === "on"){
    req.body.protect = true;
  } else {
    req.body.protect = false;
  }

  myPeps.push(req.body);
  res.redirect("/main");
});

//Get Routes
app.get("/main/:index/edit", (req, res) => {
  res.render("edit.ejs", {
    peps: myPeps[req.params.index],
    index: req.params.index
  })
})


app.get("/", (req, res) => {
  res.redirect("/main");
});

app.get("/main", (req, res) => {
  res.render("index.ejs", {
    peps: myPeps
  });
});

app.get("/main/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/main/:index", (req, res) => {
  res.render("show.ejs", {
    peps: myPeps[req.params.index]
  });
});
