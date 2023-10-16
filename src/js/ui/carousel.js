import { createNewElement } from "../utils";

export function initCarousel(items) {
    const carousel = createNewElement("div", { className: "carousel" });

    const leftButton = createNewElement("button", { className: "arrow left-arrow", onclick: () => moveCarousel(leftButton, carouselContainer, cards) });
    const leftChevron = createNewElement("span", { className: "material-icons", textContent: "chevron_left" });
    leftButton.appendChild(leftChevron);

    const carouselContainer = createNewElement("div", { className: "carousel-container" });
    const cards = buildCards(items);
    cards.forEach((card) => carouselContainer.appendChild(card));

    const rightButton = createNewElement("button", { className: "arrow right-arrow", onclick: () => moveCarousel(rightButton, carouselContainer, cards) });
    const rightChevron = createNewElement("span", { className: "material-icons", textContent: "chevron_right" });
    rightButton.appendChild(rightChevron);

    carousel.appendChild(leftButton);
    carousel.appendChild(carouselContainer);
    carousel.appendChild(rightButton);

    return carousel;
}

function buildCards(items) {
    const cards = items.map((item) => {
        const anchor = createNewElement("a", { href: `/?view=details&id=${item.id}`, className: "image-container" });
        const img = createNewElement("img", {
            src: item.primaryImage?.url,
            alt: item.originalTitleText?.text,
            className: "carousel-image",
            onerror: () => (img.src = "https://cdn.discordapp.com/attachments/931268688412299274/1026475078847823972/Hero-Banner-Placeholder-Dark-1024x480-1.png"),
        });
        const label = createNewElement("div", {
            className: "image-label",
            textContent: `${item.originalTitleText?.text} (${item.releaseYear?.year ? item.releaseYear.year : "N/A"})`,
        });
        anchor.appendChild(img);
        anchor.appendChild(label);
        return anchor;
    });

    return cards;
}

function moveCarousel(button, carouselContainer, cards) {
    const carouselIndex = parseInt(getComputedStyle(carouselContainer).getPropertyValue("--carousel-index"));
    const itemsPerScreen = parseInt(getComputedStyle(carouselContainer).getPropertyValue("--items-per-screen"));

    if (button.classList.contains("left-arrow")) {
        if (carouselIndex - 1 < 0) {
            carouselContainer.style.setProperty("--carousel-index", cards.length / itemsPerScreen - 1);
        } else {
            carouselContainer.style.setProperty("--carousel-index", carouselIndex - 1);
        }
    }

    if (button.classList.contains("right-arrow")) {
        if (carouselIndex + 1 >= cards.length / itemsPerScreen) {
            carouselContainer.style.setProperty("--carousel-index", 0);
        } else {
            carouselContainer.style.setProperty("--carousel-index", carouselIndex + 1);
        }
    }
}
