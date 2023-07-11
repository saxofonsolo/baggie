import { isElementParentTo } from "./isElementParentTo";

describe("isElementParentTo", () => {
    test("Element is parent", () => {
        document.body.innerHTML = `<div id="parent"><div><div id="target"></div></div></div>`;
        const parent = document.getElementById("parent");
        const child = document.getElementById("target");
        expect(
            isElementParentTo(parent as HTMLElement, child as HTMLElement),
        ).toBe(true);
    });

    test("Element is immediate parent", () => {
        document.body.innerHTML = `<div><div id="parent"><div id="target"></div></div></div>`;
        const parent = document.getElementById("parent");
        const child = document.getElementById("target");
        expect(
            isElementParentTo(
                parent as HTMLElement,
                child as HTMLElement,
                true,
            ),
        ).toBe(true);
    });

    test("Element is not immediate parent", () => {
        document.body.innerHTML = `<div id="parent"><div><div id="target"></div></div></div>`;
        const parent = document.getElementById("parent");
        const child = document.getElementById("target");
        expect(
            isElementParentTo(
                parent as HTMLElement,
                child as HTMLElement,
                true,
            ),
        ).toBe(false);
    });

    test("Element is not parent", () => {
        document.body.innerHTML = `<div id="parent"><div><div id="target"></div></div></div>`;
        const parent = document.getElementById("parent");
        const child = document.getElementById("target");
        expect(
            isElementParentTo(child as HTMLElement, parent as HTMLElement),
        ).toBe(false);
    });
});
