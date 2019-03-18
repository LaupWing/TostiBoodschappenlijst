"use strict"
const express = require("express");
const app = express();
const port = 5000;

app.set("view engine", "ejs");
app.set("views", "view");

app.get("/", renderHome);
app.use(express.static("static"));

function renderHome(req, res){
    res.render("pages/index");
}

console.log(`App is listening to port ${port}`);
app.listen(port);