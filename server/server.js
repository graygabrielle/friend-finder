const express = require("express");
const app = express();
const path = require("path");
const db = require("../db/models");
const router = require("./routes/index");

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

app.listen(PORT, function () {
    console.log(`App listening on http://localhost:${PORT}`)
});