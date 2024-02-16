const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/public/homepage/homepage.html");
});

app.get("/publicsquare", (req, res) => {
    res.sendFile(__dirname + "/public/publicsquare/publicsquare.html");
});


const PORT = 8080;
app.listen(PORT, (error) => console.log(error ? "An error occurred starting server" : "Server is running on port", PORT));