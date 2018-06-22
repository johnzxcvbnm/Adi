const express = require('express');
const app = express();
const fruits = require('./models/fruits.js');

app.get('/fruits/', (request, response) => {
    response.send(fruits);
})

app.get('/fruits/:index', (req, res)=>{
    res.render('show.ejs', {
        fruit: fruits[req.params.index]
    });
});

app.listen(3000, () => {
    console.log('listening');
})
