import { api, createNewElement } from "../../utils";

export async function buildDetails(id) {
    const title = await api.getATitle(id, "?info=base_info");
    const container = generateHTML(title.results);
    return container;
}

function generateHTML(title) {
    const container = createNewElement("div", { className: "details-container" });

    const img = createNewElement("img", { src: title.primaryImage?.url, alt: title.originalTitleText?.text });
    const titleText = createNewElement("h1", { textContent: title.originalTitleText?.text });
    const releaseYear = createNewElement("h2", { textContent: title.releaseYear?.year });
    const plot = createNewElement("p", { textContent: title.plot?.plotText.plainText });
    const runtime = createNewElement("p", { textContent: title.runtime?.displayableProperty?.value.plainText });
    const genresList = title.genres?.genres.map((genre) => genre.text).join(", ");
    const genres = createNewElement("p", { textContent: genresList });

    container.appendChild(img);
    container.appendChild(titleText);
    container.appendChild(releaseYear);
    container.appendChild(plot);
    container.appendChild(runtime);
    container.appendChild(genres);

    return container;
}
