const express = require("express");

const app = express();



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/time.html");
});

const PORT = 8080;
app.listen(PORT, (error) => console.log(error ? "An error occurred starting server" : "Server is running on port", PORT));

console.log(new Date())