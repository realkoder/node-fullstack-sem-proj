const express = require("express");
const app = express();


const mockedDrinks = [{drinkName: "Vodka redbull"}, {drinkName: "Isbjørn"}, {drinkName: "Old Fashion"}, {drinkName: "Negroni"}];


// GET drinks
app.route("/drinks", (req, res) => {
    res.send({data: mockedDrinks});
});

// GET drink by ID
app.route("/drinks/:drinkId", (req, res) => {

})


app.listen(8080);