import { Router } from "express";

const router = Router();

import { homepagePage } from "../modules/templatingEngine/readPages.js";

router.get("/", (req, res) => {
    res.send(homepagePage);
});

router.get("/datatypes", (req, res) => {
    res.send(homepagePage);
});

router.get("/functions", (req, res) => {
    res.send(homepagePage);
});

router.get("/modules", (req, res) => {
    res.send(homepagePage);
});

router.get("/librariesTools", (req, res) => {
    res.send(homepagePage);
});


router.get("/date", (req, res) => {
    res.send(homepagePage);
});


router.get("/about", (req, res) => {
    res.send(homepagePage);
});

export default router;