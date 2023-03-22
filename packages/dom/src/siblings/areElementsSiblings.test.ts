import { areElementsSiblings } from "./areElementsSiblings";

describe("areElementsSiblings", () => {
    test("Siblings", () => {
        document.body.innerHTML = `<div id="element-1"></div><div id="element-2"></div>`;
        const element1 = document.getElementById("element-1");
        const element2 = document.getElementById("element-2");
        expect(
            areElementsSiblings(
                element1 as HTMLElement,
                element2 as HTMLElement,
            ),
        ).toBe(true);
    });

    test("Not siblings", () => {
        document.body.innerHTML = `<div id="element-1"><div id="element-2"></div></div>`;
        const element1 = document.getElementById("element-1");
        const element2 = document.getElementById("element-2");
        expect(
            areElementsSiblings(
                element1 as HTMLElement,
                element2 as HTMLElement,
            ),
        ).toBe(false);
    });
});
