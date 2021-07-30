const express= require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const app= express();
const port= 8000;
const cookieParser= require('cookie-parser');
const db= require('./config/moongoose');
const session = require("express-session");
const passport= require('passport');
const passportLocal= require('./config/passport-local-strategy');


app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// app.use('/', 'router/index.js');

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.urlencoded({extended: true}));

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressEjsLayouts);


app.use(session({
    name: 'youngblood',
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// const router= require('./routes');
// to route every request to router
app.use('/', require('./routes/index'));


//Starting up the server
app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
    }
    else{
        console.log(`Yay! Running on port: ${port}`);
    }
})