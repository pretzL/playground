import { initCarousel } from "../../ui/carousel";
import { api, createNewElement } from "../../utils";
import * as storage from "../../utils/storage";

export async function buildStreaming() {
    const section = createNewElement("section", { className: "carousel-section", style: { width: "100%" } });
    const { countryCode, name, services } = storage.load("country");
    console.log(countryCode);
    console.log(services);

    const servicesString = Object.keys(services).join(", ");

    const newMoviesTitle = createNewElement("h2", { className: "carousel-title", textContent: "Top Box Office Last Weekend" });
    // const newMovies = await api.getStreamingChanges(servicesString, countryCode);
    // console.log(newMovies);
    // const carouselNewMovies = initCarousel(newMovies.result);

    section.appendChild(newMoviesTitle);
    // section.appendChild(carouselNewMovies);
    return section;
}
