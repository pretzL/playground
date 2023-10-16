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
        onerror: () => {
            img.onerror = null;
            img.src = "https://cdn.discordapp.com/attachments/931268688412299274/1026475078847823972/Hero-Banner-Placeholder-Dark-1024x480-1.png";
        },
    });
    const titleText = createNewElement("h1", { textContent: title.originalTitleText?.text ?? title.titleText?.text });
    const releaseYear = createNewElement("h2", { textContent: `(${title.releaseYear?.year ?? "N/A"})` });
    const plot = createNewElement("p", { textContent: title.plot?.plotText?.plainText ?? "No plot available." });
    const runtime = createNewElement("p", { textContent: title.runtime?.displayableProperty?.value.plainText ?? "Unknown runtime" });
    const genres = createNewElement("div", { className: "movie-genres", style: { display: "flex", gap: "0.5rem" } });
    title.genres?.genres.forEach((genre) => {
        const singleGenre = createNewElement("p", { textContent: genre.text, style: { backgroundColor: "#000", color: "#fff", padding: "0.5rem", borderRadius: "0.5rem" } });
        genres.appendChild(singleGenre);
    });

    container.appendChild(img);
    movieMeta.appendChild(titleText);
    movieMeta.appendChild(releaseYear);
    movieMeta.appendChild(plot);
    movieMeta.appendChild(runtime);
    movieMeta.appendChild(genres);
    container.appendChild(movieMeta);

    return container;
}
