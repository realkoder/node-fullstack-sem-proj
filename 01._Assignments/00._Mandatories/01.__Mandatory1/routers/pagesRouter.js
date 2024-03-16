import { Router } from "express";

const router = Router();

import {
    markdownAsynchronousPagePage,    
    markdownDatatypesPagePage,
    markdownDatePagePage,
    markdownFunctionsPagePage,
    markdownHomepagePage,
    markdownLibrariesToolsPagePage,
    markdownObjectsPagePage
} from "../modules/templatingEngine/readPages.js";

router.get("/", (req, res) => {
    res.send(markdownHomepagePage);
});

router.get("/asynchronous", (req, res) => {
    res.send(markdownAsynchronousPagePage);
});

router.get("/datatypes", (req, res) => {
    res.send(markdownDatatypesPagePage);
});

router.get("/date", (req, res) => {
    res.send(markdownDatePagePage);
});

router.get("/functions", (req, res) => {
    res.send(markdownFunctionsPagePage);
});

router.get("/librariesTools", (req, res) => {
    res.send(markdownLibrariesToolsPagePage);
});

router.get("/modules", (req, res) => {
    res.send();
});


router.get("/objects", (req, res) => {
    res.send(markdownObjectsPagePage)
})

export default router;