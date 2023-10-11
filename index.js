function createNewElement(type, props = {}) {
    const elem = document.createElement(type);
    const { style, className, classList, innerText, textContent, ...attributes } = props;
    Object.assign(elem, attributes);

    if (style) {
        Object.assign(elem.style, style);
    }

    if (className || classList) {
        if (classList) {
            elem.classList.add(...classList);
        } else if (className) {
            elem.className = className;
        }
    }

    if (innerText || textContent) {
        if (innerText) {
            elem.innerText = innerText;
        } else if (textContent) {
            elem.textContent = textContent;
        }
    }

    return elem;
}

const div = createNewElement("div", { className: "test-class", style: { backgroundColor: "red" }, onclick: () => alert("Clicked!"), textContent: "Hello world!" });
const body = document.querySelector("body");
body.appendChild(div);
