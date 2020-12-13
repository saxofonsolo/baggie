import { decimalRound } from "./decimalRound";

describe("decimalRound", () => {
    test("Half", () => {
        expect(decimalRound(0.5, 0)).toBe(1);
        expect(decimalRound(-0.5, 0)).toBe(-1);
    });

    test("Simple cases", () => {
        expect(decimalRound(5.12, 1)).toBe(5.1);
        expect(decimalRound(-5.12, 1)).toBe(-5.1);
    });

    test("Edge cases", () => {
        expect(decimalRound(1.005, 2)).toBe(1.01);
        expect(decimalRound(39.425, 2)).toBe(39.43);
        expect(decimalRound(-1.005, 2)).toBe(-1.01);
        expect(decimalRound(-39.425, 2)).toBe(-39.43);
    });

    test("Negative decimal places", () => {
        expect(decimalRound(1262.48, -1)).toBe(1260);
        expect(decimalRound(1262.48, -2)).toBe(1300);
    });
});
