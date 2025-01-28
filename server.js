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

app.get("/new-post", (req,res) => {
    res.render("new-post")
})

app.post("/", (req,res) =>{
    console.log("POST Made")
    res.send("hello").status("200")
})

app.delete("/", (req,res) => {
    console.log("Delete Succesfull")
    res.send("delete").status("200")
})

app.patch("/", (req,res) => {
    console.log("edit Succesfull")
    res.send("edit").status("200")
})
//404 Not Found

app.use((req,res) => {  
    res.status(404).render("404");
})