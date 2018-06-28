const express = require('express');
const app = express();
const fruits = require('./models/fruits.js');

const methodOverride = require("method-override");

// app.use((request, response, next)=>{
//     console.log('a request has been received');
//     next();
// })

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));

app.delete("/fruits/:id", (req, res) => {
  fruits.splice(req.params.id, 1);
  res.redirect("/fruits");
  // res.send("DELETING...");
});

app.get("/fruits/:index/edit", (req, res) => {
  res.render("edit.ejs", {
    fruit: fruits[req.params.index],
    index: req.params.index
  });
});

app.put("/fruits/:index", (req, res) => {
  if(req.body.readyToEat === "on"){
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  fruits[req.params.index] = req.body;
  res.redirect("/fruits");

});

app.get("/", (req, res) => {
  res.redirect("/fruits");
});

app.get('/fruits', (request, response)=>{
    response.render('index.ejs', {
        fruits: fruits
    });
});


// app.post('/products', (req, res)=>{
//     console.log('create route accessed!');
//     console.log('Req.body is: ', req.body);
//     res.send(req.body);
// });

app.post('/fruits', (request, response)=>{
    if(request.body.readyToEat === 'on'){
        request.body.readyToEat = true;
    } else {
        request.body.readyToEat = false;
    }
    fruits.push(request.body);
    response.redirect('/fruits');
});

app.get('/fruits/new', (request, response)=>{
    response.render('new.ejs');
});

app.get('/fruits/:indexOfFruitsArray', (request, response)=>{
    response.render('show.ejs',
        {
            fruit: fruits[request.params.indexOfFruitsArray]
        }
    );
});

app.listen(3000, ()=>{
    console.log('I am listening on port 3000');
});
