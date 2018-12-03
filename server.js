// Dependencies
const express = require('express');

// setup express app
let app = express();
let PORT = process.env.PORT || 3000;

// setup express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// routing
require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

app.listen(PORT, ()=>{
    console.log('App listening on port: ' + PORT);
})