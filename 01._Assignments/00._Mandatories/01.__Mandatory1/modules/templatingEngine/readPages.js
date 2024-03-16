import { renderPage, readPage } from "./templatingEngine.js";

const markdownHomepage = readPage("./public/pages/markdownPage/markdownPage.html");
export const markdownHomepagePage = renderPage(markdownHomepage, {
    tabTitle: "Full Stack Node.js - Mandatory01",
    header: "Mandatory01", 
    directoryName: "homepage",
    fileName: "homepage"
});

const markdownAsynchronousPage = readPage("./public/pages/markdownPage/markdownPage.html");
export const markdownAsynchronousPagePage = renderPage(markdownAsynchronousPage, {
    tabTitle: "Asynchronous",
    header: "Asynchronous", 
    directoryName: "asynchronous",
    fileName: "asynchronous"
});

const markdownDatatypesPage = readPage("./public/pages/markdownPage/markdownPage.html");
export const markdownDatatypesPagePage = renderPage(markdownDatatypesPage, {
    tabTitle: "Datatypes",
    header: "Datatypes", 
    directoryName: "datatypes",
    fileName: "datatypes"
});

const markdownDatePage = readPage("./public/pages/markdownPage/markdownPage.html");
export const markdownDatePagePage = renderPage(markdownDatePage, {
    tabTitle: "Date",
    header: "Date", 
    directoryName: "date",
    fileName: "date"
});

const markdownFunctionsPage = readPage("./public/pages/markdownPage/markdownPage.html");
export const markdownFunctionsPagePage = renderPage(markdownFunctionsPage, {
    tabTitle: "Functions",
    header: "Functions", 
    directoryName: "functions",
    fileName: "functions"
});
const markdownLibrariesToolsPage = readPage("./public/pages/markdownPage/markdownPage.html");
export const markdownLibrariesToolsPagePage = renderPage(markdownLibrariesToolsPage, {
    tabTitle: "Lib & Tools",
    header: "Libraries & Tools", 
    directoryName: "libraries_tools",
    fileName: "libraries_tools"
});

const markdownObjectsPage = readPage("./public/pages/markdownPage/markdownPage.html");
export const markdownObjectsPagePage = renderPage(markdownObjectsPage, {
    tabTitle: "Objects",
    header: "Objects", 
    directoryName: "objects",
    fileName: "objects"
});

