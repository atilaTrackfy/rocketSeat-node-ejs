const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res){
    const items = [
        {
            title: "D",
            message: "esenvolver apps de forma easy"
        },
        {
            title: "E",
            message: "JS usa JS para renderizar HTML"
        },
        {
            title: "M",
            message: "ulti easy"
        },
        {
            title: "A",
            message: "morzinho"
        },
        {
            title: "I",
            message: "nstall ejs"
        },
        {
            title: "S",
            message: "intaxe simples"
        }
    ];

    const subtitle = "Uma liguagem de modelagem para criação de páginas HTML utilizando JS"
    res.render("pages/index", {
        qualities: items,
        subtitle: subtitle,
    });
})
app.get("/sobre", function (req, res){
    res.render("pages/about");
})

app.listen(8080);

console.log("Rodano")
