import { getPreviousSiblings } from "./getPreviousSiblings";

describe("getPreviousSiblings", () => {
    test("Previous siblings", () => {
        document.body.innerHTML = `<div id="element-1"></div><div id="element-2"></div><div id="element-3"></div>`;
        const element3 = document.getElementById("element-3");
        expect(getPreviousSiblings(element3 as HTMLElement).length).toBe(2);
    });

    test("Previous siblings including original", () => {
        document.body.innerHTML = `<div id="element-1"></div><div id="element-2"></div><div id="element-3"></div>`;
        const element3 = document.getElementById("element-3");
        expect(
            getPreviousSiblings(element3 as HTMLElement, {
                includeOriginalElement: true,
            }).length
        ).toBe(3);
    });

    test("No siblings", () => {
        document.body.innerHTML = `<div id="element-1"><div id="element-2"></div></div><div id="element-3"></div>`;
        const element2 = document.getElementById("element-2");
        expect(getPreviousSiblings(element2 as HTMLElement)).toEqual([]);
    });

    test("No previous siblings", () => {
        document.body.innerHTML = `<div id="element-1"><div id="element-2"></div></div><div id="element-3"></div>`;
        const element1 = document.getElementById("element-1");
        expect(getPreviousSiblings(element1 as HTMLElement)).toEqual([]);
    });

    test("Only original", () => {
        document.body.innerHTML = `<div id="element-1"><div id="element-2"></div></div><div id="element-3"></div>`;
        const element1 = document.getElementById("element-1");
        expect(
            getPreviousSiblings(element1 as HTMLElement, {
                includeOriginalElement: true,
            }).length
        ).toBe(1);
    });

    test("Match selector", () => {
        document.body.innerHTML = `<div class="a"></div><div class="a"></div><div class="b"></div><div id="target"></div><div class="a"></div>`;
        const target = document.getElementById("target");
        expect(
            getPreviousSiblings(target as HTMLElement, {
                matchSelector: ".a",
                includeOriginalElement: true,
            }).length
        ).toBe(2);
    });

    test("Match selector including origin", () => {
        document.body.innerHTML = `<div class="a"></div><div class="a"></div><div class="b"></div><div class="a" id="target"></div><div class="a"></div>`;
        const target = document.getElementById("target");
        expect(
            getPreviousSiblings(target as HTMLElement, {
                matchSelector: ".a",
                includeOriginalElement: true,
            }).length
        ).toBe(3);
    });
});
