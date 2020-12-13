import { decimalFloor } from "./decimalFloor";

describe("decimalFloor", () => {
    test("Very small number", () => {
        expect(decimalFloor(1e-8, 2)).toBe(0);
    });

    test("Simple cases", () => {
        expect(decimalFloor(5.12, 1)).toBe(5.1);
        expect(decimalFloor(-5.12, 1)).toBe(-5.2);
    });

    test("Edge cases", () => {
        expect(decimalFloor(65.18, 1)).toBe(65.1);
        expect(decimalFloor(9.131, 2)).toBe(9.13);
        expect(decimalFloor(65.181, 2)).toBe(65.18);
        expect(decimalFloor(65.18, 5)).toBe(65.18);
        expect(decimalFloor(-2.26, 1)).toBe(-2.3);
        expect(decimalFloor(-2.261, 2)).toBe(-2.27);
        expect(decimalFloor(-18.159, 2)).toBe(-18.16);
        expect(decimalFloor(-18.15, 5)).toBe(-18.15);
    });

    test("Negative decimal places", () => {
        expect(decimalFloor(1262.48, -1)).toBe(1260);
        expect(decimalFloor(1262.48, -2)).toBe(1200);
    });
});
