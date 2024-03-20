import express from "express";

const app = express();

app.use(express.static("public"));


// ======================= HTML =======================
import pagesRouter from "./routers/pagesRouter.js"
app.use(pagesRouter);

// ======================= API =======================
import markdownDataApiRouter from "./routers/api/markdownData.js"
app.use(markdownDataApiRouter);

const PORT = 8080;

app.listen(PORT, (error) => {
    if (error) {
        console.log("Server FAILED running on: ", PORT);
    } else {
        console.log("Server is running on port: ", PORT);
        console.log("Go to: ", new URL(`http://localhost:${PORT}/`).href);
    }
});