const express = require('express');
app = express();
const session = require('express-session');
const bcrypt = require('bcrypt');

app.use(session({
    secret:'feedmeseymour',
    resave: false,
    saveUninitialized: false
}));


app.get('/encrypt-pwd/:pwd', (req, res)=>{
    const hashedString = bcrypt.hashSync(req.params.pwd, bcrypt.genSaltSync(10));
    req.session.pwd = hashedString;
    res.send(hashedString);
});

app.get('/login/:pwd', (req, res)=>{
    const loggedIn = bcrypt.compareSync(req.params.pwd, req.session.pwd);
    if(loggedIn){
        res.send('welcome back');
    } else {
        res.send('try again')
    }
})

app.get('/save/:username', (req, res)=>{
    req.session.username = req.params.username;
    res.send('saved!');
});

app.get('/destroy', (req, res)=>{
    req.session.destroy((err)=>{
        res.redirect('/home')
    })
})

app.get('/update/:username', (req, res)=>{
    req.session.username = req.params.username;
    res.send('updated!');
})

app.get('/home', (req, res)=>{
    res.send("Welcome, " + req.session.username);
});

app.listen(3000, ()=>{
    console.log('listening');
})
