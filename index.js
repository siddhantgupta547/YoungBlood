const express= require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const app= express();
const port= 8000;

app.use(express.static('./assets'));

app.use(expressEjsLayouts);

const db= require('./config/moongoose');

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// const router= require('./routes');
// to route every request to router
app.use('/', require('./routes/index'));
// app.use('/', 'router/index.js');

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
    }
    else{
        console.log(`Yay! Running on port: ${port}`);
    }
})