import { initCarousel } from "../../ui/carousel";
import { createNewElement } from "../../utils";

export async function buildMain() {
    const section = createNewElement("section", { className: "carousel-section", style: { width: "100%" } });
    const carousel = await initCarousel();
    section.appendChild(carousel);
    return section;
}
