import { initCarousel } from "../../ui/carousel";
import { api, createNewElement } from "../../utils";

export async function buildStreaming() {
    const section = createNewElement("section", { className: "carousel-section", style: { width: "100%" } });

    const topBoxOfficeLastWeekendTitle = createNewElement("h2", { className: "carousel-title", textContent: "Top Box Office Last Weekend" });
    const topBoxOfficeLastWeekend = await api.getAllTitles("?limit=12&info=base_info&list=top_boxoffice_last_weekend_10");
    const carouselTopBoxOfficeLastWeekend = initCarousel(topBoxOfficeLastWeekend);

    section.appendChild(topBoxOfficeLastWeekendTitle);
    section.appendChild(carouselTopBoxOfficeLastWeekend);
    return section;
}
