var friendsData = require("../data/friends");
var bestMatch;

module.exports = function(app) {




    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });



    app.post("/api/friends", function(req, res) {

        var newFriend = req.body;


        res.json(friendsData);


        var totalDifference = CalculateTotalDifference(friendsData[0].scores, newFriend.scores);

         bestMatch ={
            name: friendsData[0].name,
            photo: friendsData[0].photo,
            match : totalDifference
        }




        for (var i= 0; i < 4; i++){

            var newDif = CalculateTotalDifference(friendsData[i].scores, newFriend.scores);

            console.log(i);

            if(newDif < bestMatch.match){

                    bestMatch.name=  friendsData[i].name;
                    bestMatch.photo = friendsData[i].photo;
                    bestMatch.match = newDif
                }



        }
        friendsData.push(newFriend);

    })
};

function CalculateTotalDifference(currentFriend, NewFriend){
    var totalDifference =0;

    for(i=0;i<10;i++){
        totalDifference = totalDifference + Math.abs(currentFriend[i] - NewFriend[i]);
    }
    return totalDifference
};