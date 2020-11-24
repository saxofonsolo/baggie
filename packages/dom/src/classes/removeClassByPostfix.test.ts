import { removeClassByPostfix } from "./removeClassByPostfix";

describe("removeClassByPostfix", () => {
    test("Remove element classes by postfix", () => {
        document.body.innerHTML = `<div class="edgars edgar-allan-poe edgar-wright judge-edgar edgar-oliver thomas-edison"></div>`;
        const element = document.querySelector(".edgars");
        removeClassByPostfix(element as Element, "r");
        expect((element as Element).className).toBe(
            `edgars edgar-allan-poe edgar-wright thomas-edison`
        );
    });

    test("No matches", () => {
        document.body.innerHTML = `<div class="edgars edgar-allan-poe edgar-wright judge-edgar edgar-oliver thomas-edison"></div>`;
        const element = document.querySelector(".edgars");
        removeClassByPostfix(element as Element, "-julius");
        expect((element as Element).className).toBe(
            `edgars edgar-allan-poe edgar-wright judge-edgar edgar-oliver thomas-edison`
        );
    });
});
