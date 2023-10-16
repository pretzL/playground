import { createNewElement, api } from "../../utils";
import * as storage from "../../utils/storage/index.mjs";

export async function createDropdown() {
    const dropDownWrapper = createNewElement("li", { className: "dropdown-wrapper", style: { position: "relative", marginLeft: "auto", gap: "0.5rem" } });

    const savedCountry = storage.load("country");

    const flagDropdownButton = createNewElement("button", {
        className: "flag-dropdown-button",
        onclick: () => (flagDropdown.style.display = flagDropdown.style.display === "none" ? "flex" : "none"),
        style: { justifyContent: "space-between", width: "max-content", gap: "0.5rem" },
    });

    if (savedCountry) {
        const savedFlag = createNewElement("img", {
            className: "flag",
            src: `http://purecatamphetamine.github.io/country-flag-icons/3x2/${savedCountry.countryCode.toUpperCase()}.svg`,
            alt: savedCountry.name,
            style: { height: "100%" },
        });
        flagDropdownButton.appendChild(savedFlag);

        const savedCountryTextNode = document.createTextNode(savedCountry.name);
        flagDropdownButton.appendChild(savedCountryTextNode);
    } else {
        const defaultTextNode = document.createTextNode("Select country");
        flagDropdownButton.appendChild(defaultTextNode);
    }

    flagDropdownButton.appendChild(createNewElement("span", { className: "material-icons", textContent: "expand_more" }));

    dropDownWrapper.appendChild(flagDropdownButton);

    const countries = await api.getCountries();
    const countries_code = Object.values(countries.result);

    const flagDropdown = createNewElement("ul", {
        className: "flag-dropdown",
        style: {
            display: "none",
            position: "absolute",
            width: "max-content",
            top: "calc(100% + 1rem)",
            right: "0",
            flexDirection: "column",
            gap: "0.5rem",
            maxHeight: "350px",
            overflowY: "scroll",
            zIndex: "999",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
    });

    const searchInput = createNewElement("input", {
        className: "search-input",
        type: "text",
        placeholder: "Search country...",
        oninput: filterInput,
        style: { padding: "0.5rem", border: "none", outline: "none" },
    });

    function filterInput(e) {
        const searchQuery = e.target.value.toLowerCase();
        const items = flagDropdown.querySelectorAll(".flag-dropdown-item-button");

        items.forEach((item) => {
            if (item.textContent.toLowerCase().includes(searchQuery)) {
                item.parentElement.style.display = "block";
            } else {
                item.parentElement.style.display = "none";
            }
        });
    }

    flagDropdown.appendChild(searchInput);

    countries_code.map((code) => {
        const flagDropdownItem = createNewElement("li", { className: "flag-dropdown-item" });

        const flag = createNewElement("img", {
            className: "flag",
            src: `http://purecatamphetamine.github.io/country-flag-icons/3x2/${code.countryCode.toUpperCase()}.svg`,
            alt: code.name,
            style: { height: "100%" },
        });

        const flagDropdownItemButton = createNewElement("button", {
            className: "flag-dropdown-item-button",
            style: { width: "100%", justifyContent: "flex-start", gap: "0.5rem" },
            onclick: () => {
                storage.save("country", code);
                flagDropdownButton.innerHTML = "";

                const flagClone = flag.cloneNode(true);
                flagDropdownButton.appendChild(flagClone);

                const nameNode = document.createTextNode(code.name);
                flagDropdownButton.appendChild(nameNode);
                flagDropdownButton.appendChild(createNewElement("span", { className: "material-icons", textContent: "expand_more" }));

                flagDropdown.style.display = "none";
            },
        });

        // Add eventListener to listen for clickOutside of dropdown
        document.addEventListener("click", function (event) {
            if (flagDropdown.style.display !== "none") {
                if (!flagDropdown.contains(event.target) && !flagDropdownButton.contains(event.target)) {
                    flagDropdown.style.display = "none";
                }
            }
        });

        flagDropdownItemButton.appendChild(flag);
        const textNode = document.createTextNode(code.name);
        flagDropdownItemButton.appendChild(textNode);

        flagDropdownItem.appendChild(flagDropdownItemButton);
        flagDropdown.appendChild(flagDropdownItem);
    });

    dropDownWrapper.appendChild(flagDropdown);

    return {
        wrapper: dropDownWrapper,
        dropdown: flagDropdown,
        button: flagDropdownButton,
    };
}
