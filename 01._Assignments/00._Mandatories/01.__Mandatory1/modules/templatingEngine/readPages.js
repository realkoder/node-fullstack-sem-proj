import { renderPage, readPage } from "./templatingEngine.js";

const markdownPage = readPage("./public/pages/markdownPage/markdownPage.html");

export const markdownHomepagePage = renderPage(markdownPage, {
    tabTitle: "Full Stack Node.js - Mandatory01",
    header: "Mandatory01", 
    directoryName: "homepage",
    fileName: "homepage"
});

export const markdownAsynchronousPagePage = renderPage(markdownPage, {
    tabTitle: "Asynchronous",
    header: "Asynchronous", 
    directoryName: "asynchronous",
    fileName: "asynchronous"
});

export const markdownDatatypesPagePage = renderPage(markdownPage, {
    tabTitle: "Datatypes",
    header: "Datatypes", 
    directoryName: "datatypes",
    fileName: "datatypes"
});

export const markdownFunctionsPagePage = renderPage(markdownPage, {
    tabTitle: "Functions",
    header: "Functions", 
    directoryName: "functions",
    fileName: "functions"
});

export const markdownLibrariesToolsPagePage = renderPage(markdownPage, {
    tabTitle: "Lib & Tools",
    header: "Libraries & Tools", 
    directoryName: "libraries_tools",
    fileName: "libraries_tools"
});

export const markdownMiscellaneousToolsPagePage = renderPage(markdownPage, {
    tabTitle: "Miscellaneous",
    header: "Miscellaneous", 
    directoryName: "miscellaneous",
    fileName: "miscellaneous"
});

export const markdownObjectsPagePage = renderPage(markdownPage, {
    tabTitle: "Objects",
    header: "Objects", 
    directoryName: "objects",
    fileName: "objects"
});

