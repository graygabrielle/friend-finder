const htmlRouter = require("express").Router();
const {htmlController} = require("../controllers/htmlController");


htmlRouter.route("/")
    .get(htmlController.get);

htmlRouter.route("/survey")
    .get(htmlController.getSurvey);

module.exports = htmlRouter; 