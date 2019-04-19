const path = require("path");

const htmlController = {
    get: function(req, res){
        res.sendFile(path.join(__dirname, "../../public/home.html"));
    },
    getSurvey: function(req, res){
        res.sendFile(path.join(__dirname, "../../public/survey.html"));
    }
}

module.exports = {htmlController}; 