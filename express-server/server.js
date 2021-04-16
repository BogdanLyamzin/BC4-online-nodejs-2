const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.send("Home page");
});

app.get("/about", (req, res)=> {
    res.send("About page")
});

app.listen(3000, ()=> console.log("Server running"));