// Dependencies
const path = require('path');
let friends = require('../data/friends');
module.exports = function(app){
    console.log('reading apiRoutes');
  // api reqests routing
  app.get('/api/friends',(req,res)=>{
    res.JSON.parse(friends);
  });
  app.post('/api/friends',(req,res)=>{
    let newFriend = req.body;
    let compare = function(newfriend){
        // store compatability scores against each friend in the table
        let compatability = [];
        friends.forEach((friend)=>{
            let diff = 0;
            console.log(friend.name);
            for(let i=0;i<friend.scores.length;i++){
              diff += Math.abs(friend.scores[i]-newfriend.scores[i]);
              // console.log(friend.scores[i],newfriend.scores[i],diff);
            }
            compatability.push(diff);
        });
        // return the index for the friend with least compatability difference
        console.log(Math.min(...compatability));
        return compatability.indexOf(Math.min(...compatability));
    
    }
    
    // comapare friends to find the closest match
    console.log(friends[compare(newFriend)]);
    res.json([friends[compare(newFriend)]]);
    // add new friend to table
    friends.push(newFriend);

  });
};