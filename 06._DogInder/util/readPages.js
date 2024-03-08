import { renderPage, readPage } from "./templatingEngine.js";

const homepage = readPage("./public/pages/homepage/homepage.html");
export const homepagePage = renderPage(homepage);

const contact = readPage("./public/pages/contact/contact.html");
export const contactPage = renderPage(contact);

const matches = readPage("./public/pages/matches/matches.html");
export const matchesPage = renderPage(matches, {
    tabTitle: "Matches",
    CSSLinks: '<link rel="stylesheet" href="/pages/matches/matches.css">'
});