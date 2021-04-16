const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());

app.use((req, res, next)=> {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const data = `Час: ${hour}. Минуты: ${minutes}`;
    fs.appendFile("server.log", `${data} \n`, ()=> {});
    next();
});

// app.use((req, res, next)=> {
//     console.log("Middleware 2")
//     next()
// });

app.get("/", (req, res)=>{
    res.send("Home page");
});

app.get("/about", (req, res)=> {
    res.send("About page")
});

app.listen(3000, ()=> console.log("Server running"));