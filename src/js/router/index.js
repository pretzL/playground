import { build404, buildStreaming, buildContact, buildMain } from "../pages";
import { buildDetails } from "../pages/details";
import { renderView } from "../ui/renderView";
import { getSearchParams } from "./searchParams";

async function route() {
    const { view, id } = getSearchParams();

    switch (view) {
        case undefined:
            return buildMain();
        case null:
            return buildMain();
        case "":
            return buildMain();
        case "home":
            return buildMain();
        case "streaming":
            return buildStreaming();
        case "contact":
            return buildContact();
        case "details":
            return buildDetails(id);
        default:
            return build404();
    }
}

export default async () => {
    const view = await route();
    renderView(view);
};
