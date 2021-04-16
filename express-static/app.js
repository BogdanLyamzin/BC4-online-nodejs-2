const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.static(`${__dirname}/public`));
// app.use(express.static(`${__dirname}/files`));
// index.html
// user-photo.jpg
app.get("/", (req, res, next)=>{
    res.send("Home page")
});

app.get("/about", (req, res, next)=>{
    res.send("About page")
});

app.listen(3000);