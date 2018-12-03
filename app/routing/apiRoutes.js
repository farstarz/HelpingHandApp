// Dependencies
const path = require('path');
let friends = require('../data/friends');
module.exports = function(app){
    // api reqests routing
    app.get('/api/friends',(req,res)=>{
        return JSON.parse(friends);
    });
    app.post('/api/friends',(req,res)=>{
        let newFriend = req.body;
        console.log(newFriend);
        
    });
}