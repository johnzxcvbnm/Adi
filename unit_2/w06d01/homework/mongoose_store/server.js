//Dependencies
const mongoose = require("mongoose");
const express = require("express");
const methodOverride = require("method-override");
const MyProducts = require("./models/product.js");

const app = express();
const port = 3000;

//Middleware
app.use( methodOverride("_method") );
app.use( express.static("public") );
app.use( express.urlencoded( {extended: true} ) );

const getTitle = () => {
  switch( Math.floor(Math.random() * 6) ){
    case 0: return "You Can Never Have Too Much Jonk";
    case 1: return "Please Buy My Jonk";
    default: return "Welcome to the Jonk Store";
  }
}


//Listening
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Seed Data
app.get('/jonk/seed', async (req, res) => {

  const newProducts = [
		{
			name: "Beans",
			description: "A small pile of beans. Buy more beans for a big pile of beans.",
	        img: "https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2",
			price: 5,
			qty: 99
		}, {
			name: "Bones",
			description: "It's just a bag of bones.",
    	    img: "http://bluelips.com/prod_images_large/bones1.jpg",
			price: 25,
			qty: 0
	  }, {
			name: "Bins",
			description: "A stack of colorful bins for your beans and bones.",
    	    img: "http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg",
			price: 7000,
			qty: 1
	  }
	];

	try {
		const seedItems = await MyProducts.create(newProducts);
		res.send(seedItems);
	} catch (err) {
		res.send(err.message);
	}
});

app.get("/jonk/:index", (req, res) => {
  MyProducts.findById( req.params.index, (err, myPro) => {
    res.render("show.ejs", {
      title: getTitle(),
      product: myPro
    });
  });
});

app.get("/jonk", (req, res) => {
  MyProducts.find( {}, (err, allPro) => {
    res.render("index.ejs", {
      title: getTitle(),
      products: allPro
    });
  });
});

app.get("/", (req, res) => {
  res.redirect("/jonk");
});

mongoose.connect("mongodb://localhost:27017/product");
mongoose.connection.once("open", () => {
  console.log("Connected to Mongo");
});
