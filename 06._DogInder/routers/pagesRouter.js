import { Router } from "express";

const router = Router();

import { homepagePage, contactPage, matchesPage } from "../util/readPages.js";

// =================== HTML ==================

router.get("/", (req, res) => {
    //res.sendFile(path.resolve("public/pages/homepage/homepage.html"));
    res.send(homepagePage);
});

router.get("/matches", (req, res) => {
    // res.sendFile(path.resolve("public/pages/matches/matches.html"));
    res.send(matchesPage);
});

router.get("/contact", (req, res) => {
    // res.sendFile(path.resolve("public/pages/contact/contact.html"));
    res.send(contactPage);
});

router.get("/page", (req, res) => {
    res.send("");
});

export default router;