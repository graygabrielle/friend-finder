const apiRouter = require("express").Router();
const {dbController} = require("../controllers/dbController");


apiRouter.route("/")
    .get(dbController.get)
    .post(dbController.post);


apiRouter.route("/match")
    .get(dbController.getMatch);
    
module.exports = apiRouter; 