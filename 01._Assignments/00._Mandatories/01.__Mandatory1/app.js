import express from "express";

const app = express();

app.use(express.static("public"));

import { homepagePage } from "./modules/templatingEngine/readPages.js";

// ======================= HTML =======================

// Serving index / homepage
app.get("/", (req, res) => {
    res.send(homepagePage);
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