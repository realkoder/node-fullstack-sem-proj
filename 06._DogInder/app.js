import express from "express";

const app = express();

app.use(express.static("public"));

import playRouter from "./routers/playRouter.js";

app.use(playRouter);

// Task: Creates a matchesRouter and put /matches route inside of it and combine irt with the server
import matchesRouter from "./routers/matchesRouter.js"
app.use(matchesRouter);

// Task: Create a pagesRouter add the html routes into it

import pagesRouter from "./routers/pagesRouter.js"
app.use(pagesRouter);


// import { homepagePage, contactPage, matchesPage } from "./util/readPages.js";

// // =================== HTML ==================

// app.get("/", (req, res) => {
//     //res.sendFile(path.resolve("public/pages/homepage/homepage.html"));
//     res.send(homepagePage);
// });

// app.get("/matches", (req, res) => {
//     // res.sendFile(path.resolve("public/pages/matches/matches.html"));
//     res.send(matchesPage);
// });

// app.get("/contact", (req, res) => {
//     // res.sendFile(path.resolve("public/pages/contact/contact.html"));
//     res.send(contactPage);
// });

// app.get("/page", (req, res) => {
//     res.send("");
// });

// =================== API ==================

// app.get("/api/matches", async (req, res) => {
//     const matches = await getMatches();
//     res.send({ data: matches });
// });

const PORT = 8080;

app.listen(PORT, () => console.log("Server is running on port: ", PORT));