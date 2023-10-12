import { createNewElement } from "../../utils";

export function buildAbout() {
    const div = createNewElement("div", { className: "test-class", style: { backgroundColor: "red" }, onclick: () => alert("Clicked!"), textContent: "About page!" });
    return div;
}
