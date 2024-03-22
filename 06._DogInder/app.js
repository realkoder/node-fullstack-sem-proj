import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"));

import playRouter from "./routers/playRouter.js";

app.use(playRouter);

// Task: Creates a matchesRouter and put /matches route inside of it and combine irt with the server
import matchesRouter from "./routers/matchesRouter.js"
app.use(matchesRouter);

// Task: Create a pagesRouter add the html routes into it
import pagesRouter from "./routers/pagesRouter.js"
app.use(pagesRouter);

import contactRouter from "./routers/contactRouter.js";
app.use(contactRouter)


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Server is running on port: ", PORT));