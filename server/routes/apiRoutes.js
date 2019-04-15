const apiRouter = require("express").Router();
const {dbController} = require("../controllers/dbController");


apiRouter.route("/")
    .get(dbController.get)
    .post(dbController.post);

module.exports = apiRouter; 