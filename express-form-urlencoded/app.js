const express = require("express");

const app = express();

// app.use(express.urlencoded({extended: false}));

app.use(express.static(`${__dirname}/public`));

const urlencodeExtr = express.urlencoded({extended: false})

app.post("/login", urlencodeExtr, (req, res, next)=> {
    const {email, password} = req.body;
    console.log(email);
    console.log(password);
});

// app.get("/login")

app.listen(3000);