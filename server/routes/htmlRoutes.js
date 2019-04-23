const htmlRouter = require("express").Router();
const {htmlController} = require("../controllers/htmlController");


htmlRouter.route("/")
    .get(htmlController.get);

htmlRouter.route("/survey")
    .get(htmlController.getSurvey);

htmlRouter.route("/bestmatch")
    .get(htmlController.getBestMatch);

htmlRouter.route("/nomatch")
    .get(htmlController.getNoMatch);

module.exports = htmlRouter; 