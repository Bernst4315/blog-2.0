const express = require("express");
const fs = require("fs");

const port = 8080; 

const app = express();

app.set("view engine", "ejs");


app.listen(port, () => {
    console.log("server is running");
})

//middleware

app.use(express.static("public"));

//Website GET requests

app.get("/", (req,res) =>{
    res.render("home");
})

app.get("/about", (req,res) =>{
    res.render("about");
})

app.get("/Survey", (req,res) => {
    res.render("Survey")
})