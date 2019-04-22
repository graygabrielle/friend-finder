
const db = require("../../db/models");

const dbController = {
  get: async function(req, res){
    let bestMatch = "sorry we couldn't find you a match!";
    // const newUser =req.body;
    // console.log(newUser);
    try{
      // let {id:newUserId, surveyAnswers:newUserAnswers, userGender:newUserGender, lookingFor:newUserLookingFor} = req.body;
      // const newUserId = req.body.id;
      // console.log("req.body.id: " + req.body.json());
      // console.log("new user id: " + newUserId);
      const allUsers = await db.User.findAll(
        //where: {
          //userGender: newUserLookingFor
          // lookingFor: newUserGender
        //}
      );

    

      // let smallestDiff = 0;
      // for(let i=0; i<allUsers.length; i++){
      //   const userId = allUsers[i].id;
      //   if(userId!==newUserId){
      //     newUserAnswers = JSON.parse(newUserAnswers);
      //     console.log("new user answers: " + newUserAnswers);
      //     const userAnswers = JSON.parse(allUsers[i].surveyAnswers);
      //     let diff = 0;
      //     for(let index=0; index<userAnswers.length; index++){
      //         diff = diff + Math.abs(parseInt(userAnswers[index])-parseInt(newUserAnswers[index]))
      //     }
      //     if(diff<smallestDiff || i===0){
      //       smallestDiff=diff;
      //       bestMatch=allUsers[i];
      //     }
      //   }
      // }

      res.json(allUsers); 
    }
    catch(e){
      res.send(e);
    }
  },
  post: async function(req, res){
    try{
      const newUser = req.body;
      console.log(newUser);
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