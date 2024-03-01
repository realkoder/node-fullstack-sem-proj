import express from "express";

const app = express();

app.use(express.json());

app.use(express.static("public"));

const { helicopterFactory } = import("./util/helicopterFactory.js");

app.get("/", (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/public/homepage/homepage.html");
});

app.get("/publicsquare", (req, res) => {
    res.sendFile(__dirname + "/public/publicsquare/publicsquare.html");
});

const knownNames = ["Alex"];

app.get("/greeting", (req, res) => {
    const queryName = req.query.name;
    const greetingMessage = knownNames.findIndex(name => name === queryName) !== -1 ? `Hello ${queryName}` : "Hello stranger";
    res.send({ data: greetingMessage });
});

app.get("/knownpeople", (req, res) => {
    res.send({ data: knownNames.length });
});


app.get("/proxy", (req, res) => {
    fetch("https://google.com")
        .then(response => response.text())
        .then(result => res.send(result));
});


const PORT = 8080;
app.listen(PORT, (error) => console.log(error ? "An error occurred starting server" : "Server is running on port", PORT));