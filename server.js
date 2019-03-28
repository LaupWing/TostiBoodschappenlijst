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
    .get('/boodschappen', boodschappenPage)
    .post("/add", addItem)
    .post('/:id', jsCheck)
    .post('/voegBoodschappenToe', voegBoodschappenToe);



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
    res.redirect("/tosti")
}
function boodschappenPage(req,res){
    const {tosti} = req.session.settings;
    const tostiArray = [].concat.apply([], tosti);
    tostiArray[0] = tostiArray[0] + " Brood"
    res.render('pages/lijst',{
        tostiArray,

    })
}

function voegBoodschappenToe(req,res){
    console.log(req.body)
    console.log("DOE WAT")
    // res.redirect('/boodschappen')
}

function renderHome(req, res){
    req.session.settings = null
    res.render("pages/index");
}

function tostiPage(req, res){
    const { settings } = req.session
    console.log(settings)
    res.render("pages/tosti", {settings});
}

console.log(`App is listening to port ${port}`);
app.listen(port);