"use strict"
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("static"));

app.set("view engine", "ejs");
app.set("views", "view");

app.get("/", renderHome);
app.get("/tosti1", renderStep1);
app.get("/test/:id", renderTest);

// De posts
app.post("/tosti1post", tosti1POST);
app.post("/testPost", testPost);


function tosti1POST(req, res, next){
    console.log(req.body)
    console.log(req)
    res.redirect(`/test/${req.body.brood}`);
    // res.render("pages/tosti1");
    // next();
}

console.log(bodyParser)
function renderHome(req, res){
    res.render("pages/index");
}

function renderStep1(req, res){
    console.log("rendering step1");
    res.render("pages/tosti1");
    console.log(localStorage.getItem("myFirstKey"))
}

function renderTest(req, res){
    res.render("pages/test");
}

function testPost(req, res){
    console.log(req.body)
    res.render("pages/test")
}



console.log(`App is listening to port ${port}`);
app.listen(port);