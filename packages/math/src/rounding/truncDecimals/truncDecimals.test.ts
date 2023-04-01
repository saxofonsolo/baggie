import { truncDecimals } from "./truncDecimals";

describe("decimalTrunc", () => {
    test("Simple cases", () => {
        expect(truncDecimals(5.12, 1)).toBe(5.1);
        expect(truncDecimals(5.19, 1)).toBe(5.1);
        expect(truncDecimals(-5.12, 1)).toBe(-5.1);
        expect(truncDecimals(-5.19, 1)).toBe(-5.1);
    });

    test("Edge cases", () => {
        expect(truncDecimals(2.262, 2)).toBe(2.26);
        expect(truncDecimals(18.158, 2)).toBe(18.15);
        expect(truncDecimals(-2.268, 2)).toBe(-2.26);
        expect(truncDecimals(-18.152, 2)).toBe(-18.15);
    });

    test("Negative decimal places", () => {
        expect(truncDecimals(1268.48, -1)).toBe(1260);
        expect(truncDecimals(1212.48, -1)).toBe(1210);
        expect(truncDecimals(1262.48, -2)).toBe(1200);
        expect(truncDecimals(1212.48, -2)).toBe(1200);
    });
});
