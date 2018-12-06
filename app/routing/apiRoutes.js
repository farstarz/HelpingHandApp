// Dependencies
const path = require('path');
let friends = require('../data/friends');
module.exports = function(app){
  // api reqests routing
  app.get('/api/friends',(req,res)=>{
    res.JSON.parse(friends);
    console.log(JSON.parse(friends));
  });
  app.post('/api/friends',(req,res)=>{
    let newFriend = req.body;
    let compare = function(newfriend){
        // store compatability scores against each friend in the table
        let compatability = [];
        friends.forEach((friend)=>{
            let diff = 0;
            for(let i=0;i<friend.scores.length;i++){
                diff += Math.abs(friend.scores[i],newfriend.scores[i]);
            }
            compatability.push(diff);
        });
        // return the index for the friend with least compatability difference
        return compatability.indexOf(Math.min(compatability));
    
    }
    console.log(newFriend);
    // comapare friends to find the closest match
    res.JSON(friends[compare(newFriend)]);
    
    // add new friend to table
    friends.push(newFriend);

  });
};