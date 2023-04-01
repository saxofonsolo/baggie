import { blurFocusedElement } from "./blurFocusedElement";
import { getFocusedElement } from "./getFocusedElement";

describe("getFocusedElement", () => {
    test("Get focused element", () => {
        document.body.innerHTML = `<input id="input">`;
        const input = document.getElementById("input");

        (input as HTMLInputElement).focus();
        expect(getFocusedElement()).toBe(input);

        blurFocusedElement();
        expect(getFocusedElement()).not.toBe(input);
    });
});
