const express = require('express');
const app = express();
const fruits = require('./models/fruits.js');

// app.use((req, res, next) => {
//   console.log("I run for all routes");
//   next();
// })

app.use( express.static( "public" ) );
app.use( express.urlencoded( {extended:false} ) );

app.get('/fruits', (request, response)=>{
    response.render("index.ejs", {
      fruit: fruits
    })
});

app.get("/fruits/new", (req, res) => {
  res.render("new.ejs");
});

app.get('/fruits/:indexOfFruitsArray', (request, response)=>{
    response.render('show.ejs',
        {
            fruit: fruits[request.params.indexOfFruitsArray]
        }
    );
});

app.post("/fruits", (req, res) => {
  // console.log(req.body);
  // res.send("Data Recieved");
  if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
      req.body.readyToEat = true; //do some data correction
  } else { //if not checked, req.body.readyToEat is undefined
      req.body.readyToEat = false; //do some data correction
  }

  fruits.push(req.body);
  // console.log(fruits);
  // res.send("data recieved");
  res.redirect("/fruits"); //send the user back to /fruits
});

app.listen(3000, ()=>{
    console.log('I am listening on port 3000');
});

// app.post("/products", (req, res) => {
//   console.log("Create route accessed!");
//   console.log("Req.body is: ", req.body);
//   res.send("This route works\n");
// });
