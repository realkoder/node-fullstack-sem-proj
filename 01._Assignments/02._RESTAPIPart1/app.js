const express = require("express");
const app = express();


const mockedDrinks = [
    { id: 1, drinkName: "Vodka redbull" },
    { id: 2, drinkName: "Isbjørn" },
    { id: 3, drinkName: "Old Fashion" },
    { id: 4, drinkName: "Negroni" }
];


// GET drinks
app.get("/drinks", (req, res) => {
    res.send({ data: mockedDrinks });
});

// GET drink by ID
app.get("/drinks/:drinkId", (req, res) => {
    const drinkId = Number(req.params.drinkId);

    if (!drinkId) res.send({data: "ID is not a number."});

    const drink = mockedDrinks.find(drink => drink.id === drinkId);
    
    if (!drink) res.send({data: "No content"});

    res.send({ data: drink });
});

// POST drink
app.post("/drinks", (req, res) => {
    res.send({ data: mockedDrinks });
});

// PUT drink by ID
app.put("/drinks/:drinkId", (req, res) => {

});

// PATCH drink by ID
app.patch("/drinks/:drinkId", (req, res) => {
    // Will be implemented later
});

// DELETE drink by ID
app.delete("/drinks/:drinkId", (req, res) => {
    // Will be implemented later
});


app.listen(8080);