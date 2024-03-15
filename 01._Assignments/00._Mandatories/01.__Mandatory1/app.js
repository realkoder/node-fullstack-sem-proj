import express from "express";
import fs from "fs";
import path from "path";

const app = express();

app.use(express.static("public"));

import { homepagePage } from "./modules/templatingEngine/readPages.js";
import { url } from "inspector";

// ======================= HTML =======================

// Serving index / homepage
app.get("/", (req, res) => {
    res.send(homepagePage);
});

app.get("/datatypes", (req, res) => {
    res.send(homepagePage);
});

app.get("/functions", (req, res) => {
    res.send(homepagePage);
});

app.get("/modules", (req, res) => {
    res.send(homepagePage);
});

app.get("/librariesTools", (req, res) => {
    res.send(homepagePage);
});


app.get("/date", (req, res) => {
    res.send(homepagePage);
});


app.get("/about", (req, res) => {
    res.send(homepagePage);
});



// ======================= API =======================

app.get("/markdownContent/:directory/:filename", (req, res) => {
    const providedDirectory = req.params.directory;
    const providedFileName = req.params.filename;
    if (providedFileName && providedDirectory && providedDirectory.length > 0 && providedFileName.length > 0) {
        const filePath = path.join(process.cwd(), "/docs/" + providedDirectory + "/", providedFileName + ".md");
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
                res.status(500).send("Internal server error");
            } else {
                res.send(data);
            }
        });
    } else {
        res.status(400).send("Invalid file name");
    }
});

const PORT = 8080;

app.listen(PORT, (error) => {
    if (error) {
        console.log("Server FAILED running on: ", PORT);
    } else {
        console.log("Server is running on port: ", PORT);
        console.log("Go to: ", new URL(`http://localhost:${PORT}/`).href);
    }
})