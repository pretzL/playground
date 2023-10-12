import { createNewElement } from "../../utils";

export function buildMain() {
    const div = createNewElement("div", { className: "test-class", style: { backgroundColor: "red" }, onclick: () => alert("Clicked!"), textContent: "Main page!" });
    return div;
}
