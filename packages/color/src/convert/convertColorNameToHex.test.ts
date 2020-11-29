import { convertColorNameToHex } from "./convertColorNameToHex";

describe("convertColorNameToHex", () => {
    test("Red", () => {
        expect(convertColorNameToHex("red")).toBe("#ff0000");
    });

    test("Lime", () => {
        expect(convertColorNameToHex("lime")).toBe("#00ff00");
    });

    test("Blue", () => {
        expect(convertColorNameToHex("blue")).toBe("#0000ff");
    });
});
