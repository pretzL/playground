import { clear, createNewElement } from "../../utils";

export function buildContact() {
    const div = createNewElement("div", { className: "test-class", style: { backgroundColor: "red" }, onclick: () => alert("Clicked!"), textContent: "Contact page!" });
    return div;
}
