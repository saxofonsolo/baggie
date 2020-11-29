import { getAllParents } from "./getAllParents";

describe("getAllParents", () => {
    test("Get all parents", () => {
        document.body.innerHTML = `<div class="parent-2"><div class="parent-1"><div id="target"></div></div></div>`;
        const target = document.getElementById("target");
        const parents = getAllParents(target as HTMLElement);
        expect(parents[parents.length - 1].tagName).toBe("HTML");
    });

    test("With limit", () => {
        document.body.innerHTML = `<div class="parent-2"><div class="parent-1"><div id="target"></div></div></div>`;
        const target = document.getElementById("target");
        const parents = getAllParents(target as HTMLElement, { limit: 1 });
        expect(parents[parents.length - 1].className).toBe("parent-1");
    });

    test("Match a selector", () => {
        document.body.innerHTML = `<div class="parent-2"><div class="parent-1"><div id="target"></div></div></div>`;
        const target = document.getElementById("target");
        const parents = getAllParents(target as HTMLElement, {
            matchSelector: ".parent-2",
        });
        expect(parents[parents.length - 1].className).toBe("parent-2");
    });

    test("Maximum distance (number)", () => {
        document.body.innerHTML = `<div class="parent parent-3"><div class="parent parent-2"><div class="parent parent-1"><div id="target"></div></div></div></div>`;
        const target = document.getElementById("target");
        const parents = getAllParents(target as HTMLElement, {
            maxDistance: 2,
        });
        expect(parents[parents.length - 1].className).toBe("parent parent-2");
    });

    test("Maximum distance (selector)", () => {
        document.body.innerHTML = `<div class="parent parent-3"><div class="parent parent-2"><div class="parent parent-1"><div id="target"></div></div></div></div>`;
        const target = document.getElementById("target");
        const parents = getAllParents(target as HTMLElement, {
            maxDistance: ".parent-3",
        });
        expect(parents[parents.length - 1].className).toBe("parent parent-3");
    });

    test("Maximum distance (element)", () => {
        document.body.innerHTML = `<div class="parent parent-3"><div class="parent parent-2"><div class="parent parent-1"><div id="target"></div></div></div></div>`;
        const target = document.getElementById("target");
        const maxDistance = document.querySelector(".parent-3");
        const parents = getAllParents(target as HTMLElement, {
            maxDistance: maxDistance as HTMLElement,
        });
        expect(parents[parents.length - 1].className).toBe("parent parent-3");
    });

    test("No matches", () => {
        document.body.innerHTML = `<div class="parent parent-3"><div class="parent parent-2"><div class="parent parent-1"><div id="target"></div></div></div></div>`;
        const target = document.getElementById("target");
        const parents = getAllParents(target as HTMLElement, {
            matchSelector: ".parent-4",
        });
        expect(parents[parents.length - 1]).toBe(undefined);
    });
});
