const express= require('express');
const app= express();
const port= 8000;
// const router= require('./routes');

// to route every request to router
app.use('/', require('./routes/index'));
// app.use('/', 'router/index.js');

app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
    }
    else{
        console.log(`Yay! Running on port: ${port}`);
    }
})