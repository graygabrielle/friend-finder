const path = require("path");
const db = require("../../db/models");
const express = require("express");

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
      console.log(req.body);
            try {
              const newUser = req.body;
              const response = await db.User.create({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                profilePicture: newUser.profilePic,
                userAge: newUser.age,
                userGender: newUser.userGender,
                lookingFor: newUser.lookingFor,
                surveyAnswers: newUser.surveyAnswers
              });
              res.json(response);
            } catch(e) {
              res.send(e);
            } 
    }
}

module.exports = {dbController}; 