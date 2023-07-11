import { getClassByPostfix } from "./getClassByPostfix";

describe("getClassByPostfix", () => {
    test("Get element classes by prefix", () => {
        document.body.innerHTML = `<div class="edgars edgar-allan-poe edgar-wright judge-edgar edgar-oliver thomas-edison"></div>`;
        const element = document.querySelector(".edgars");
        expect(getClassByPostfix(element as Element, "r")).toEqual([
            "judge-edgar",
            "edgar-oliver",
        ]);
    });

    test("Get no matches", () => {
        document.body.innerHTML = `<div class="edgars edgar-allan-poe edgar-wright judge-edgar edgar-oliver thomas-edison"></div>`;
        const element = document.querySelector(".edgars");
        expect(getClassByPostfix(element as Element, "-julius")).toEqual([]);
    });
});
