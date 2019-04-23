const path = require("path");

const htmlController = {
    get: function(req, res){
        res.sendFile(path.join(__dirname, "../../public/home.html"));
    },
    getSurvey: function(req, res){
        res.sendFile(path.join(__dirname, "../../public/survey.html"));
    },
    getBestMatch: function(req, res){
        res.sendFile(path.join(__dirname, "../../public/bestmatch.html"));
    },
    getNoMatch: function(req, res){
        res.sendFile(path.join(__dirname, "../../public/nomatch.html"));
    }
}

module.exports = {htmlController}; 