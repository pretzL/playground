import { api, createNewElement } from "../../utils";

export async function buildDetails(id) {
    const title = await api.getATitle(id, "?info=base_info");
    const container = generateHTML(title.results);
    return container;
}

function generateHTML(title) {
    const container = createNewElement("div", { className: "details-container" });
    const movieMeta = createNewElement("div", { className: "movie-meta" });

    const img = createNewElement("img", {
        src: title.primaryImage?.url,
        alt: title.originalTitleText?.text ?? title.titleText?.text,
        onerror: () => (img.src = "https://cdn.discordapp.com/attachments/931268688412299274/1026475078847823972/Hero-Banner-Placeholder-Dark-1024x480-1.png"),
    });
    const titleText = createNewElement("h1", { textContent: title.originalTitleText?.text ?? title.titleText?.text });
    const releaseYear = createNewElement("h2", { textContent: `(${title.releaseYear?.year ?? "N/A"})` });
    const plot = createNewElement("p", { textContent: title.plot?.plotText?.plainText ?? "No plot available." });
    const runtime = createNewElement("p", { textContent: title.runtime?.displayableProperty?.value.plainText ?? "Unknown runtime" });
    const genresList = title.genres?.genres.map((genre) => genre.text).join(", ");
    const genres = createNewElement("p", { className: "movie-genres", textContent: genresList });

    container.appendChild(img);
    movieMeta.appendChild(titleText);
    movieMeta.appendChild(releaseYear);
    movieMeta.appendChild(plot);
    movieMeta.appendChild(runtime);
    movieMeta.appendChild(genres);
    container.appendChild(movieMeta);

    return container;
}
