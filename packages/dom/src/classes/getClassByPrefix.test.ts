import { getClassByPrefix } from "./getClassByPrefix";

describe("getClassByPrefix", () => {
    test("Get element classes by prefix", () => {
        document.body.innerHTML = `<div class="edgars j-edgar-hoover edgar-allan-poe edgar-wright judge-edgar edgar-oliver thomas-edison"></div>`;
        const element = document.querySelector(".edgars");
        expect(getClassByPrefix(element as Element, "edgar-")).toEqual([
            "edgar-allan-poe",
            "edgar-wright",
            "edgar-oliver",
        ]);
    });

    test("Get no matches", () => {
        document.body.innerHTML = `<div class="edgars edgar-allan-poe edgar-wright judge-edgar edgar-oliver thomas-edison"></div>`;
        const element = document.querySelector(".edgars");
        expect(getClassByPrefix(element as Element, "julius-")).toEqual([]);
    });
});
