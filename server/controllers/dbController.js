const path = require("path");

const dbController = {
    get: async function(req, res){
        const goodMatch = await db.User.findOne({
            where: {
                surveyAnswers: (x)
            }
        });
        res.json(goodMatch); 
    },
    post: async function(req, res){
            try {
              const newUser = req.body;
              const response = await db.User.create({
                displayName: newUser.fullName,
                profilePicture: newUser.profilePicture,
                userAge: newUser.userAge,
                surveyAnswers: newUser.surveyAnswers
              });
              res.json(response);
            } catch(e) {
              res.send(e);
            } 
    }
}

module.exports = {dbController}; 