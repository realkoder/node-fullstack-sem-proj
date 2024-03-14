import { renderPage, readPage } from "./templatingEngine.js";

const homepage = readPage("./public/pages/homepage/homepage.html");
export const homepagePage = renderPage(homepage);