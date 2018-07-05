var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
// var methodOverride = require('method-override');
//
// app.use(methodOverride('_method'));
app.use(express.json());
app.use(session({
    secret: "feedmeseymour", //some random string
    resave: false,
    saveUninitialized: false
}));

var usersController = require('./controllers/users.js');
app.use('/users', usersController);

var sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);
//
// app.get('/', function(req, res){
//     res.render('index.ejs', {
//         currentUser: req.session.currentuser
//     });
// });

app.get('/app', function(req, res){
    if(req.session.currentuser){
        res.json(req.session.currentuser);
    } else {
        res.status(401).json({
            status:401,
            message: "not logged in"
        });
    }
});

mongoose.connect('mongodb://localhost:27017/auth');

mongoose.connection.once('open', function(){
    console.log('connected to mongo');
});

app.listen(3000, function(){
    console.log('listening...');
});
