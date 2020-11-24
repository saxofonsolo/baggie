import { getFocusedElement } from "./getFocusedElement";

describe("getFocusedElement", () => {
    test("Get focused element", () => {
        document.body.innerHTML = `<input id="input1"><input id="input2">`;
        const input1 = document.getElementById("input1");
        const input2 = document.getElementById("input2");
        (input1 as HTMLInputElement).focus();
        expect(getFocusedElement()).toBe(input1);
        (input2 as HTMLInputElement).focus();
        expect(getFocusedElement()).toBe(input2);
    });
});
