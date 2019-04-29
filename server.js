const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//BODYPARSER for the access a post elements
app.use(bodyParser.json()); //I say to express please encode (codifica) i body  come json
app.use(bodyParser.urlencoded({ extended: true })); //encode le url come json

//PUG
app.set("view engine", "pug");

app.use(express.static("public"));

//ROUTES AND CONTROLLERS
app.get("/", function(req, res) {
  // console.log("index contains:", req.body);
  let indexPage = {
    h1: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  };
  res.render("index.html", indexPage);
});

//creo una rout per dire cosa contain il body quando clicco sul bottone
app.post("/events", (req, res) => {
  // console.log("the body:", req.body);
  let giveCity = req.body.city;
  let plz = req.body.plz;
  //post elements
  let renderingThePage = {
    // console.log("req.city.giveCity")
    title: "Your events",
    text: "You are looking for:",
    city: giveCity,
    plz: plz
  };
  res.render("secondpage", renderingThePage); //with this render send dati from the user-confirm file (SECONDPAGE IS A PUG FILE DO NOT NEED .PUG)
});

app.listen(3001, function() {
  console.log("server running");
});
