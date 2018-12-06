// Dependencies
const path = require('path');

module.exports = function(app){
    // routing
    app.get('/home',(req,res)=>{
        res.sendFile(path.join(__dirname,'..','/public/home.html'));
    });
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'..','/public/survey.html'));
    });
}