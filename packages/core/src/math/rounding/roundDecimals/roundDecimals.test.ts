import { roundDecimals } from "./roundDecimals";

describe("decimalRound", () => {
    test("Half", () => {
        expect(roundDecimals(0.5, 0)).toBe(1);
        expect(roundDecimals(-0.5, 0)).toBe(-1);
    });

    test("Simple cases", () => {
        expect(roundDecimals(5.12, 1)).toBe(5.1);
        expect(roundDecimals(-5.12, 1)).toBe(-5.1);
    });

    test("Edge cases", () => {
        expect(roundDecimals(1.005, 2)).toBe(1.01);
        expect(roundDecimals(39.425, 2)).toBe(39.43);
        expect(roundDecimals(-1.005, 2)).toBe(-1.01);
        expect(roundDecimals(-39.425, 2)).toBe(-39.43);
    });

    test("Negative decimal places", () => {
        expect(roundDecimals(1262.48, -1)).toBe(1260);
        expect(roundDecimals(1262.48, -2)).toBe(1300);
    });
});
