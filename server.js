"use strict"
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
const session = require("express-session");


app
    .use(bodyParser.urlencoded({extended:true}))
    .use(bodyParser.json())
    .use(express.static("static"))
    .use(session({
        secret: "TostiMeester",
        cookie: {secure: false},
        resave: false,
        saveUninitialized: true
    }))
    .set("view engine", "ejs")
    .set("views", "view");

app
    .get("/", renderHome)
    .get("/tosti", tostiPage)
    .post("/add", addItem)
    .post('/:id', jsCheck);


function jsCheck(req,res){
    console.log(req.params.id)
    if(req.params.id === "javascriptYES"){
        req.session.settings =
        {
            javascript: true
        }
    }else{
        req.session.settings =
        {
            javascript: false
        }
    }
    res.redirect('/tosti')
}


function addItem(req,res){
    let { body } = req;
    delete body.optie
    req.session.settings.tosti = (req.session.settings.tosti || new Array())
        .concat(Object.values(body))
    console.log(req.session.settings)
    res.redirect("/tosti")
}

function renderHome(req, res){
    req.session.settings = null
    res.render("pages/index");
}

function tostiPage(req, res){
    const { settings } = req.session
    res.render("pages/tosti", {settings});
}

console.log(`App is listening to port ${port}`);
app.listen(port);