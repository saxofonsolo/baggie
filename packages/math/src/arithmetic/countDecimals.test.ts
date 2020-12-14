import { countDecimals } from "./countDecimals";

describe("countDecimals", () => {
    test("Count decimals of type number", () => {
        expect(countDecimals(123)).toBe(0);
        expect(countDecimals(0.2)).toBe(1);
        expect(countDecimals(1.123456789)).toBe(9);
        expect(countDecimals(1.0000000001)).toBe(10);
        expect(countDecimals(-111.0000000001)).toBe(10);
        expect(countDecimals(-111)).toBe(0);
    });

    test("Count decimals of type string", () => {
        expect(countDecimals("1.000000000")).toBe(9);
        expect(countDecimals("1.0000000001")).toBe(10);
        expect(countDecimals("-1.0000000001")).toBe(10);
        expect(countDecimals("-111")).toBe(0);
    });
});
