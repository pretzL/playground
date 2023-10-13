import { initCarousel } from "../../ui/carousel";
import { api, createNewElement } from "../../utils";

export async function buildMain() {
    const section = createNewElement("section", { className: "carousel-section", style: { width: "100%" } });

    const topBoxOfficeLastWeekendTitle = createNewElement("h2", { className: "carousel-title", textContent: "Top Box Office Last Weekend" });
    const topBoxOfficeLastWeekend = await api.getAllTitles("?limit=10&info=base_info&list=top_boxoffice_last_weekend_10");
    const carouselTopBoxOfficeLastWeekend = initCarousel(topBoxOfficeLastWeekend);

    const topRated250Title = createNewElement("h2", { className: "carousel-title", textContent: "Top Rated" });
    const topRated250 = await api.getAllTitles("?limit=10&info=base_info&list=top_rated_english_250");
    const carouselTopRated250 = initCarousel(topRated250);

    section.appendChild(topBoxOfficeLastWeekendTitle);
    section.appendChild(carouselTopBoxOfficeLastWeekend);
    section.appendChild(topRated250Title);
    section.appendChild(carouselTopRated250);
    return section;
}
