import { isElementEmpty } from "./isElementEmpty";

describe("isElementEmpty", () => {
    test("Completely empty", () => {
        document.body.innerHTML = `<div id="element"></div>`;
        const element = document.getElementById("element");
        expect(isElementEmpty(element as HTMLElement)).toBe(true);
    });

    test("Has whitespace", () => {
        document.body.innerHTML = `<div id="element"> </div>`;
        const element = document.getElementById("element");
        expect(isElementEmpty(element as HTMLElement)).toBe(false);
    });

    test("Trim whitespace", () => {
        document.body.innerHTML = `<div id="element"> </div>`;
        const element = document.getElementById("element");
        expect(isElementEmpty(element as HTMLElement, true)).toBe(true);
    });
});
