
const db = require("../../db/models");

const dbController = {

  get: async function(req, res){
    try{
      const allUsers = await db.User.findAll();
      res.json(allUsers); 
    }
    catch(e){
      res.send(e);
    }
  },
  getMatch: async function(req, res){
    try{
      const match = await db.User.findOne({
        where: {
          id: req.query.id
        }
      })
      res.json(match);
    }
    catch(e){
      res.send(e);
    }
  },
  post: async function(req, res){
    try{
      const newUser = req.body;
      // console.log(newUser);
      const age = parseInt(newUser.age);
      const response = await db.User.create({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        profilePic: newUser.profilePic,
        age: age,
        userGender: newUser.userGender,
        lookingFor: newUser.lookingFor,
        surveyAnswers: newUser.surveyAnswers
      });
      res.json(response);
    }
    catch(e){
      res.send(e);
    }
  } 
}

module.exports = {dbController}; 