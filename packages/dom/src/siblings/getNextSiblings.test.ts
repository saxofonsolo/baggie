import { getNextSiblings } from "./getNextSiblings";

describe("getNextSiblings", () => {
    test("Next siblings", () => {
        document.body.innerHTML = `<div id="element-1"></div><div id="element-2"></div><div id="element-3"></div>`;
        const element1 = document.getElementById("element-1");
        expect(getNextSiblings(element1 as HTMLElement).length).toBe(2);
    });

    test("Next siblings including original", () => {
        document.body.innerHTML = `<div id="element-1"></div><div id="element-2"></div><div id="element-3"></div>`;
        const element1 = document.getElementById("element-1");
        expect(
            getNextSiblings(element1 as HTMLElement, {
                includeOriginalElement: true,
            }).length,
        ).toBe(3);
    });

    test("No siblings", () => {
        document.body.innerHTML = `<div id="element-1"><div id="element-2"></div></div><div id="element-3"></div>`;
        const element2 = document.getElementById("element-2");
        expect(getNextSiblings(element2 as HTMLElement)).toEqual([]);
    });

    test("No following siblings", () => {
        document.body.innerHTML = `<div id="element-1"><div id="element-2"></div></div><div id="element-3"></div>`;
        const element3 = document.getElementById("element-3");
        expect(getNextSiblings(element3 as HTMLElement)).toEqual([]);
    });

    test("Only original", () => {
        document.body.innerHTML = `<div id="element-1"><div id="element-2"></div></div><div id="element-3"></div>`;
        const element3 = document.getElementById("element-3");
        expect(
            getNextSiblings(element3 as HTMLElement, {
                includeOriginalElement: true,
            }).length,
        ).toBe(1);
    });

    test("Match selector", () => {
        document.body.innerHTML = `<div class="a"></div><div class="a"></div><div class="b"></div><div id="target"></div><div class="a"></div>`;
        const target = document.getElementById("target");
        expect(
            getNextSiblings(target as HTMLElement, {
                matchSelector: ".a",
                includeOriginalElement: true,
            }).length,
        ).toBe(1);
    });

    test("Match selector including origin", () => {
        document.body.innerHTML = `<div class="a"></div><div class="a"></div><div class="b"></div><div class="a" id="target"></div><div class="a"></div>`;
        const target = document.getElementById("target");
        expect(
            getNextSiblings(target as HTMLElement, {
                matchSelector: ".a",
                includeOriginalElement: true,
            }).length,
        ).toBe(2);
    });
});
