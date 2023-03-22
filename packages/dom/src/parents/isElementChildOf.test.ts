import { isElementChildOf } from "./isElementChildOf";

describe("isElementChildOf", () => {
    test("Element is child", () => {
        document.body.innerHTML = `<div id="parent"><div><div id="target"></div></div></div>`;
        const parent = document.getElementById("parent");
        const child = document.getElementById("target");
        expect(
            isElementChildOf(child as HTMLElement, parent as HTMLElement),
        ).toBe(true);
    });

    test("Element is immediate child", () => {
        document.body.innerHTML = `<div><div id="parent"><div id="target"></div></div></div>`;
        const parent = document.getElementById("parent");
        const child = document.getElementById("target");
        expect(
            isElementChildOf(child as HTMLElement, parent as HTMLElement, true),
        ).toBe(true);
    });

    test("Element is not immediate child", () => {
        document.body.innerHTML = `<div id="parent"><div><div id="target"></div></div></div>`;
        const parent = document.getElementById("parent");
        const child = document.getElementById("target");
        expect(
            isElementChildOf(child as HTMLElement, parent as HTMLElement, true),
        ).toBe(false);
    });

    test("Element is not child", () => {
        document.body.innerHTML = `<div id="parent"><div><div id="target"></div></div></div>`;
        const parent = document.getElementById("parent");
        const child = document.getElementById("target");
        expect(
            isElementChildOf(parent as HTMLElement, child as HTMLElement),
        ).toBe(false);
    });
});
