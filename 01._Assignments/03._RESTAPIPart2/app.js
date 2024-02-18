// RESTAPI with CRUD endpoints for DRINKS domain

const express = require("express");

const app = express();
app.use(express.json());


let mockedDrinks = [
    { id: 1, name: "Vodka redbull" },
    { id: 2, name: "Isbjørn" },
    { id: 3, name: "Old Fashion" },
    { id: 4, name: "Negroni" }
];


// GET drinks
app.get("/drinks", (req, res) => {
    res.send({ data: mockedDrinks });
});


// GET drink by ID
app.get("/drinks/:drinkId", (req, res) => {
    const providedDrinkId = Number(req.params.drinkId);

    if (!providedDrinkId) {
        // HTTPSTATUS not acceptable if ID isn't a number
        return res.status(406).send({ data: "ID is not a number." });
    }

    const drink = mockedDrinks.find(drink => drink.id === drinkId);

    if (!drink) {
        // HTTPSTATUS no content if ID isn't existing
        return res.status(404).send({ data: "No content" });
    }

    res.send({ data: drink });
});


// POST drink
app.post("/drinks", (req, res) => {
    const providedDrink = req.body;
    if (Object.keys(providedDrink).length === 1 && providedDrink.hasOwnProperty("name")) {
        const newDrinkId = mockedDrinks.length === 0 ? 1 : mockedDrinks.sort((a, b) => a.id - b.id)[mockedDrinks.length - 1].id + 1;
        mockedDrinks.push({ ...providedDrink, id: newDrinkId });
        console.log(mockedDrinks);
        // HTTPSTATUS 201 CREATED
        res.status(201).send({ data: providedDrink });
    } else {
        res.status(406).send({ data: "The request body isn't correct" });
    }
});


// PUT drink by ID
app.put("/drinks/:drinkId", (req, res) => {
    const providedDrinkId = Number(req.params.drinkId);
    const providedDrink = req.body;

    if (!providedDrinkId) {
        // HTTPSTATUS not acceptable if ID isn't a number
        return res.status(406).send({ data: "ID is not a number." });
    }

    if (Object.keys(providedDrink).length === 2 && providedDrink.hasOwnProperty("id") && providedDrink.hasOwnProperty("name") &&
        providedDrinkId === providedDrink.id) {
        if (mockedDrinks.findIndex(drink => drink.id === providedDrinkId) === -1) return res.status(404).send({ data: "NO CONTENT" });

        mockedDrinks.map(drink => {
            if (drink.id === providedDrinkId) {
                drink.name = providedDrink.name;
                return drink;
            } else {
                return drink;
            }
        });
        res.send({ data: providedDrink });
    } else {
        // HTTPSTATUS no content
        res.status(404).send({ data: "The request body isn't correct" });
    }
});


// PATCH drink by ID
app.patch("/drinks/:drinkId", (req, res) => {
    const providedDrinkId = Number(req.params.drinkId);
    const providedDrinkKeyValue = req.body;

    if (!providedDrinkId) {
        // HTTPSTATUS not acceptable if ID isn't a number
        return res.status(406).send({ data: "ID is not a number." });
    }

    if (Object.keys(providedDrinkKeyValue).length === 1 && providedDrinkKeyValue.hasOwnProperty("name")) {
        if (mockedDrinks.findIndex(drink => drink.id === providedDrinkId) === -1) return res.status(404).send({ data: "NO CONTENT" });

        mockedDrinks.map(drink => {
            if (drink.id === providedDrinkId) {
                drink.name = providedDrinkKeyValue.name;
                return drink;
            } else {
                return drink;
            }
        });
        res.send({ data: mockedDrinks.find(drink => drink.id === providedDrinkId) });
    } else {
        // HTTPSTATUS no content
        res.status(404).send({ data: "The request body isn't correct" });
    }
});


// DELETE drink by ID
app.delete("/drinks/:drinkId", (req, res) => {
    const providedDrinkId = Number(req.params.drinkId);

    if (!providedDrinkId) {
        // HTTPSTATUS not acceptable if ID isn't a number
        return res.status(406).send({ data: "ID is not a number." });
    }

    const drink = mockedDrinks.find(drink => drink.id === providedDrinkId);

    if (!drink) {
        // HTTPSTATUS no content if ID isn't existing
        return res.status(404).send({ data: "No content" });
    }

    // The request is valid and drink will be deleted
    mockedDrinks = mockedDrinks.filter(drink => {
        if (drink.id !== providedDrinkId) return drink;
    });
    res.send({ data: `Drink with id: ${providedDrinkId} is deleted` });
});


const PORT = 8080;
app.listen(PORT, (error) => console.log(error ? "An error occurred starting the server" : "Server is running on port", PORT));