"use strict"
const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const port = 5000;

app.set("view engine", "ejs");
app.set("views", "view");

app.get("/", renderHome);
app.get("/tosti1", renderStep1);
app.post("/tosti1post", tosti1POST);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(express.static("static"));

function tosti1POST(req, res ){
    console.log(req)
    res.render("pages/tosti1");
}

console.log(bodyParser)
function renderHome(req, res){
    res.render("pages/index");
}

function renderStep1(req, res){
    console.log("rendering step1")
    res.render("pages/tosti1");
}

console.log(`App is listening to port ${port}`);
app.listen(port);