import { getSiblings } from "./getSiblings";

describe("getSiblings", () => {
    test("Previous siblings", () => {
        document.body.innerHTML = `<div id="element-1"></div><div id="element-2"></div><div id="element-3"></div><div id="element-4"></div>`;
        const element3 = document.getElementById("element-3");
        expect(
            getSiblings(element3 as HTMLElement, {
                untilElement: element3 as HTMLElement,
            }).length
        ).toBe(2);
    });

    test("Previous siblings including original", () => {
        document.body.innerHTML = `<div id="element-1"></div><div id="element-2"></div><div id="element-3"></div><div id="element-4"></div>`;
        const element3 = document.getElementById("element-3");
        expect(
            getSiblings(element3 as HTMLElement, {
                untilElement: element3 as HTMLElement,
                includeOriginalElement: true,
            }).length
        ).toBe(3);
    });

    test("Next siblings", () => {
        document.body.innerHTML = `<div id="element-1"></div><div id="element-2"></div><div id="element-3"></div><div id="element-4"></div>`;
        const element2 = document.getElementById("element-2");
        expect(
            getSiblings(element2 as HTMLElement, {
                fromElement: element2 as HTMLElement,
            }).length
        ).toBe(2);
    });

    test("Next siblings including original", () => {
        document.body.innerHTML = `<div id="element-1"></div><div id="element-2"></div><div id="element-3"></div><div id="element-4"></div>`;
        const element2 = document.getElementById("element-2");
        expect(
            getSiblings(element2 as HTMLElement, {
                fromElement: element2 as HTMLElement,
                includeOriginalElement: true,
            }).length
        ).toBe(3);
    });

    test("No siblings", () => {
        document.body.innerHTML = `<div id="element-1"><div id="element-2"></div></div><div id="element-3"></div>`;
        const element2 = document.getElementById("element-2");
        expect(getSiblings(element2 as HTMLElement)).toEqual([]);
    });

    test("No previous siblings", () => {
        document.body.innerHTML = `<div id="element-1"><div id="element-2"></div></div><div id="element-3"></div>`;
        const element1 = document.getElementById("element-1");
        expect(
            getSiblings(element1 as HTMLElement, {
                untilElement: element1 as HTMLElement,
            })
        ).toEqual([]);
    });

    test("No following siblings", () => {
        document.body.innerHTML = `<div id="element-1"></div><div id="element-2"><div id="element-3"></div></div>`;
        const element2 = document.getElementById("element-2");
        expect(
            getSiblings(element2 as HTMLElement, {
                fromElement: element2 as HTMLElement,
            })
        ).toEqual([]);
    });

    test("Only original", () => {
        document.body.innerHTML = `<div id="element-1"><div id="element-2"></div></div><div id="element-3"></div>`;
        const element2 = document.getElementById("element-2");
        expect(
            getSiblings(element2 as HTMLElement, {
                includeOriginalElement: true,
            }).length
        ).toBe(1);
    });

    test("Only specific range not including origin", () => {
        document.body.innerHTML = `<div id="element-1"></div><div id="element-2"></div><div id="element-3"></div><div id="element-4"></div><div id="element-5"></div>`;
        const element1 = document.getElementById("element-1");
        const element2 = document.getElementById("element-2");
        const element4 = document.getElementById("element-4");
        expect(
            getSiblings(element1 as HTMLElement, {
                fromElement: element2 as HTMLElement,
                untilElement: element4 as HTMLElement,
            }).length
        ).toBe(3);
    });

    test("Only specific range including origin", () => {
        document.body.innerHTML = `<div id="element-1"></div><div id="element-2"></div><div id="element-3"></div><div id="element-4"></div><div id="element-5"></div>`;
        const element2 = document.getElementById("element-2");
        const element3 = document.getElementById("element-3");
        const element4 = document.getElementById("element-4");
        expect(
            getSiblings(element3 as HTMLElement, {
                fromElement: element2 as HTMLElement,
                untilElement: element4 as HTMLElement,
            }).length
        ).toBe(2);
    });

    test("Match selector", () => {
        document.body.innerHTML = `<div class="a"></div><div class="a"></div><div class="b"></div><div id="target"></div><div class="a"></div>`;
        const target = document.getElementById("target");
        expect(
            getSiblings(target as HTMLElement, {
                matchSelector: ".a",
                includeOriginalElement: true,
            }).length
        ).toBe(3);
    });

    test("Match selector including origin", () => {
        document.body.innerHTML = `<div class="a"></div><div class="a"></div><div class="b"></div><div class="a" id="target"></div><div class="a"></div>`;
        const target = document.getElementById("target");
        expect(
            getSiblings(target as HTMLElement, {
                matchSelector: ".a",
                includeOriginalElement: true,
            }).length
        ).toBe(4);
    });
});
