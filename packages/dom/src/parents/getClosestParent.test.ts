import { getClosestParent } from "./getClosestParent";

describe("getClosestParent", () => {
    test("Get closest parent", () => {
        document.body.innerHTML = `<div class="parent-2"><div class="parent-1"><div id="target"></div></div></div>`;
        const target = document.getElementById("target");
        const parent = getClosestParent(target as HTMLElement);
        expect((parent as HTMLElement).className).toBe("parent-1");
    });

    test("Get closest parent matching a selector", () => {
        document.body.innerHTML = `<div class="parent-2"><div class="parent-1"><div id="target"></div></div></div>`;
        const target = document.getElementById("target");
        const parent = getClosestParent(target as HTMLElement, ".parent-2");
        expect((parent as HTMLElement).className).toBe("parent-2");
    });

    test("No matches", () => {
        document.body.innerHTML = `<div class="parent-2"><div class="parent-1"><div id="target"></div></div></div>`;
        const target = document.getElementById("target");
        const parent = getClosestParent(target as HTMLElement, ".parent-3");
        expect(parent).toBe(undefined);
    });
});
