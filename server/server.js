const express = require("express");
const app = express();
const path = require("path");
const router = require("./routes");
const db = require("../db/models");

const PORT = process.env.PORT || 3000;

//body parser middle ware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//serves static versions of css & js so we can store as seperate files
app.use(express.static(path.join(__dirname, "../public")));

//point app to routes
app.use("/", router);


db.sequelize.sync({
    force: true
}).then(function () {

console.log("database synced and table created");
app.listen(PORT, function () {
    console.log(`App listening on http://localhost:${PORT}`)
})

})
.catch(function(e){
    console.log(e);
})