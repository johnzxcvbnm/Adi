const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const fruits = require('./models/fruits.js');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

app.post('/products', (req, res)=>{
    console.log('create route accessed');
    console.log("Req.body is: ", req.body);
    res.send(req.body);
});

app.post('/fruits', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    res.redirect('/fruits');
});

//index page
app.get('/fruits', (req, res)=>{
    res.render('index.ejs', {
        allFruits: fruits
    });
});

app.get('/fruits/new', (req, res)=>{
    res.render('new.ejs');
});

//show page
app.get('/fruits/:indexOfFruitsArray', (req, res)=>{
    res.render('show.ejs', {
        fruit: fruits[req.params.indexOfFruitsArray]
    });
});


app.listen(3000, ()=>{
    console.log('I am listening');
});
