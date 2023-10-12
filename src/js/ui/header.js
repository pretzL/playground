import { setSearchParams } from "../router/searchParams";
import { createNewElement } from "../utils";

export function header() {
    const ul = createNewElement("ul", { className: "nav-ul", style: { display: "flex", gap: "1rem" } });

    const liHome = createNewElement("li", { className: "nav-li", style: { listStyleType: "none" } });
    const homeAnchor = createNewElement("button", { textContent: "Home", onclick: () => setSearchParams({ view: "home" }) });
    liHome.appendChild(homeAnchor);
    ul.appendChild(liHome);

    const liAbout = createNewElement("li", { className: "nav-li", style: { listStyleType: "none" } });
    const aboutAnchor = createNewElement("button", { textContent: "About", onclick: () => setSearchParams({ view: "about" }) });
    liAbout.appendChild(aboutAnchor);
    ul.appendChild(liAbout);

    const liContact = createNewElement("li", { className: "nav-li", style: { listStyleType: "none" } });
    const contactAnchor = createNewElement("button", { textContent: "Contact", onclick: () => setSearchParams({ view: "contact" }) });
    liContact.appendChild(contactAnchor);
    ul.appendChild(liContact);

    const header = document.querySelector("header");
    header.appendChild(ul);
}
