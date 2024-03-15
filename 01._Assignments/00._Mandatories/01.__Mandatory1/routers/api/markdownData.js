import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

router.get("/markdownContent/:directory/:filename", (req, res) => {
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

export default router;