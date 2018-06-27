// dependencies
const express = require('express');
const app = express();

// config
const port = 3000;

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// DataBase
const products = require('./models/products');

// index route
app.get('/products', (req, res) => {
  res.render("index.ejs", {
    product: products
  });
  //res.send(products);
});

//Show route to new products posting
app.get("/products/new", (req, res) => {
  res.render("new.ejs");
});

// show route
app.get('/products/:id', (req, res) => {
  res.render("show.ejs", {
    product: products[req.params.id]
  });
});

// listen
app.listen(port, () => console.log("App is running on port: ", port));

//Post new products
app.post("/products", (req, res) => {
  products.push(req.body);
  res.redirect("/products");
});
