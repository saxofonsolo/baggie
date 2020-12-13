import { decimalTrunc } from "./decimalTrunc";

describe("decimalTrunc", () => {
    test("Simple cases", () => {
        expect(decimalTrunc(5.12, 1)).toBe(5.1);
        expect(decimalTrunc(5.19, 1)).toBe(5.1);
        expect(decimalTrunc(-5.12, 1)).toBe(-5.1);
        expect(decimalTrunc(-5.19, 1)).toBe(-5.1);
    });

    test("Edge cases", () => {
        expect(decimalTrunc(2.262, 2)).toBe(2.26);
        expect(decimalTrunc(18.158, 2)).toBe(18.15);
        expect(decimalTrunc(-2.268, 2)).toBe(-2.26);
        expect(decimalTrunc(-18.152, 2)).toBe(-18.15);
    });

    test("Negative decimal places", () => {
        expect(decimalTrunc(1268.48, -1)).toBe(1260);
        expect(decimalTrunc(1212.48, -1)).toBe(1210);
        expect(decimalTrunc(1262.48, -2)).toBe(1200);
        expect(decimalTrunc(1212.48, -2)).toBe(1200);
    });
});
