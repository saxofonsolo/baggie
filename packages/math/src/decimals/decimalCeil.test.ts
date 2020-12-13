import { decimalCeil } from "./decimalCeil";

describe("decimalCeil", () => {
    test("Very small number", () => {
        expect(decimalCeil(1e-8, 2)).toBe(0.01);
    });

    test("Simple cases", () => {
        expect(decimalCeil(5.12, 1)).toBe(5.2);
        expect(decimalCeil(-5.12, 1)).toBe(-5.1);
    });

    test("Edge cases", () => {
        expect(decimalCeil(65.18, 1)).toBe(65.2);
        expect(decimalCeil(9.131, 2)).toBe(9.14);
        expect(decimalCeil(65.181, 2)).toBe(65.19);
        expect(decimalCeil(65.18, 5)).toBe(65.18);
        expect(decimalCeil(-2.26, 1)).toBe(-2.2);
        expect(decimalCeil(-2.261, 2)).toBe(-2.26);
        expect(decimalCeil(-18.159, 2)).toBe(-18.15);
        expect(decimalCeil(-18.15, 5)).toBe(-18.15);
    });

    test("Negative decimal places", () => {
        expect(decimalCeil(1262.48, -1)).toBe(1270);
        expect(decimalCeil(1262.48, -2)).toBe(1300);
    });
});
