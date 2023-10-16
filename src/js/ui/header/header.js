import { createNewElement } from "../../utils";
import { createNavItem } from "./navItems";
import { createDropdown } from "./dropdown";

export async function header() {
    const ul = createNewElement("ul", { className: "nav-ul", style: { display: "flex", gap: "1rem", paddingTop: "1rem" } });

    ul.appendChild(createNavItem("Home", "home"));
    ul.appendChild(createNavItem("Streaming", "streaming"));
    ul.appendChild(createNavItem("Contact", "contact"));

    // const { wrapper, dropdown, button } = await createDropdown();
    // ul.appendChild(wrapper);
    // wrapper.appendChild(dropdown);

    const headerElement = document.querySelector("header");
    headerElement.appendChild(ul);
}
