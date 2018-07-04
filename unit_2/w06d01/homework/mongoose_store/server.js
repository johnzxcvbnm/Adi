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

// Put Routes
app.put("/jonk/:id/buy/:productQty", (req, res) => {
  MyProducts.findByIdAndUpdate ( req.params.id, { qty: (req.params.productQty - 1) }, (err) => {
    res.redirect(`/jonk/${req.params.id}`);
  })
  // res.send("BUYING");
});

app.put("/jonk/:id", (req, res) => {
  MyProducts.findByIdAndUpdate( req.params.id, req.body, (err) => {
    res.redirect(`/jonk/${req.params.id}`);
  });
});

// Delete Routes
app.delete("/jonk/:id", (req, res) => {
  MyProducts.findByIdAndRemove( req.params.id, (err) => {
    res.redirect("/jonk");
  });
});

app.get("/jonk/deleteall", (req, res) => {
  MyProducts.remove( (err) => {
    res.redirect("/jonk");
  });
});

// Post Routes
app.post("/jonk", (req, res) => {
  // res.send("POST?");
  // console.log(req.body);
  MyProducts.create(req.body, (err) => {
    res.redirect("/jonk");
  });
});

// Seed Data
app.get('/jonk/seed', async (req, res) => {

  const newProducts = [
    {
      name: "Bag of Mystery",
      description: "What's in the bag?  Who knows!  It's a mystery!",
      img:"https://media.istockphoto.com/photos/garbage-bag-picture-id147689606?k=6&m=147689606&s=612x612&w=0&h=09ai_Y2t1LniLgwZ9Fo1w5h5GK0-XGQ09RFIm_q7DcQ=",
      price: 350,
      qty: 5
    }, {
      name: "Rusty Nails",
      description: "Ever hear that saying 'You're nailing it'?  Well this is where it comes from, nails!  So if you want to 'nail it' in all aspects of life, this is a must have!",
      img:"https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2015/06/RustyNails-650x450.jpg",
      price: 10,
      qty: 200
    }, {
      name: "Slime",
      description: "Get tomorrows' super food, today!  This blue gelatinous delicacy is harvested weekly as it forms mysteriously on the sewer cover in my alleyway.  Just don't tell the FDA about it.",
      img:"http://redwork.co/wp-content/uploads/2018/05/clear-slime-with-contact-solution-blue-clear-slime-scented-clear-blue-slime-scented-slime-super-clear-slime-clear-blue-slime-blue-glass-slime-slime-fun-slime-clear-slime-contact-solution.jpg",
      price: 25,
      qty: 30
    }, {
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
		// res.send(seedItems);
    res.redirect("/jonk");
	} catch (err) {
		res.send(err.message);
	}
});

// Get Routes
app.get("/jonk/:id/edit", (req, res) => {
  MyProducts.findById( req.params.id, (err, myPro) => {
    res.render("edit.ejs", {
      title: getTitle(),
      product: myPro
    });
  });
});

app.get("/jonk/new", (req, res) => {
  res.render("new.ejs", {
    title: getTitle()
  });
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
