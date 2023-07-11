import { removeClassByPrefix } from "./removeClassByPrefix";

describe("removeClassByPrefix", () => {
    test("Remove element classes by prefix", () => {
        document.body.innerHTML = `<div class="edgars edgar-allan-poe edgar-wright judge-edgar edgar-oliver thomas-edison"></div>`;
        const element = document.querySelector(".edgars");
        removeClassByPrefix(element as Element, "edgar-");
        expect((element as Element).className).toBe(
            `edgars judge-edgar thomas-edison`,
        );
    });

    test("No matches", () => {
        document.body.innerHTML = `<div class="edgars edgar-allan-poe edgar-wright judge-edgar edgar-oliver thomas-edison"></div>`;
        const element = document.querySelector(".edgars");
        removeClassByPrefix(element as Element, "julius-");
        expect((element as Element).className).toBe(
            `edgars edgar-allan-poe edgar-wright judge-edgar edgar-oliver thomas-edison`,
        );
    });
});
