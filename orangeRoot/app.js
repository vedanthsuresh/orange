const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const ejs = require("ejs");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
const items = ["citrus cleaner", "dry peels", "fresh oranges"];
app.get("/", (req, res) => {
    res.render("index", {});
});

app.get("/ws", (req, res) => {
    res.render("ws", {});
});

app.post("/ws", (req, res) => {
    if (items.includes(_.lowerCase(req.body.userInput))) {
        res.redirect("/" + _.lowerCase(req.body.userInput));
    } else {
        res.render("error", {});
    }
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});

app.get("/citrus%20cleaner", (req, res) => {
    res.render("citruscleaner", {});
});

app.get("/dry%20peels", (req, res) => {
    res.render("drypeels", {});
});

app.get("/fresh%20oranges", (req, res) => {
    res.render("freshoranges", {});
});

app.post("/", (req, res) => {
    res.redirect("/");
});

app.get("/biteme", (req, res) => {
    res.render("biteme", {});
});