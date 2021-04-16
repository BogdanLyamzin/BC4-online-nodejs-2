const express = require("express");

const app = express();

app.set("views", "./views"); // в какой папке искать шаблоны
app.set("view engine", "ejs"); // каким пакетом их обрабатывать

const contactsProps = {
    title: "Контакты сайта",
    emailsVisible: true,
    emails: ["myemail@gmail.com", "myemail2@gmail.com"],
    phone: "067-453-33-33"
};

app.get("/contacts", (req, res, next)=> {
    res.render("contacts", contactsProps); 
    /* взять шаблон в первом аргументе, подставить данные из второго, 
    и отправить в качестве ответа сгенерированный HTML-файл
    */
});

app.listen(3000);