import { createNewElement } from "../utils";

export function header() {
    const ul = createNewElement("ul", { className: "nav-ul", style: { display: "flex", gap: "1rem" } });

    const liHome = createNewElement("li", { className: "nav-li", style: { listStyleType: "none" } });
    const homeAnchor = createNewElement("a", { href: "/?view=home", textContent: "Home" });
    liHome.appendChild(homeAnchor);
    ul.appendChild(liHome);

    const liAbout = createNewElement("li", { className: "nav-li", style: { listStyleType: "none" } });
    const aboutAnchor = createNewElement("a", { href: "/?view=about", textContent: "About" });
    liAbout.appendChild(aboutAnchor);
    ul.appendChild(liAbout);

    const liContact = createNewElement("li", { className: "nav-li", style: { listStyleType: "none" } });
    const contactAnchor = createNewElement("a", { href: "/?view=contact", textContent: "Contact" });
    liContact.appendChild(contactAnchor);
    ul.appendChild(liContact);

    const header = document.querySelector("header");
    header.appendChild(ul);
}
