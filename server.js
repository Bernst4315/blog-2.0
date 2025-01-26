const express = require("express");
const fs = require("fs");

const app = express();
const port = 8080; 

app.listen(port, () => {
    console.log("server is running");
})

//middleware

app.use(express.static("public"))

//Website GET requests

app.get("/", (req,res) =>{
    res.sendFile("./views/home.html", {root: __dirname})
})

app.get("/about", (req,res) =>{
    res.sendFile("./views/about.html", {root: __dirname})
})