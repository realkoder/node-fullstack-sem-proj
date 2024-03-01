import express from "express";
import path from "path"

const app = express();

app.use(express.static("public"));


// ======================= HTML =======================

// Serving index / homepage
app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/pages/homepage/homepage.html"));
});

// ======================= API =======================



const PORT = 8080;

app.listen(PORT, (error) => {
    if (error) {
        console.log("Server FAILED running on: ", PORT);
    } else {
        console.log("Server is running on port: ", PORT);
    }
})