import { Router } from "express";

const router = Router();

import {
    markdownAsynchronousPagePage,    
    markdownDatatypesPagePage,
    markdownFunctionsPagePage,
    markdownHomepagePage,
    markdownLibrariesToolsPagePage,
    markdownMiscellaneousToolsPagePage,
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

router.get("/functions", (req, res) => {
    res.send(markdownFunctionsPagePage);
});

router.get("/librariesTools", (req, res) => {
    res.send(markdownLibrariesToolsPagePage);
});

router.get("/miscellaneous", (req, res) => {
    res.send(markdownMiscellaneousToolsPagePage);
});

router.get("/objects", (req, res) => {
    res.send(markdownObjectsPagePage)
})

export default router;