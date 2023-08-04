import { nonNumberFallback } from "./nonNumberFallback";

describe("nonNumberFallback", () => {
    test("nonNumberFallback", () => {
        expect(nonNumberFallback(0, -1)).toBe(0);
        expect(nonNumberFallback(-10, -1)).toBe(-10);
        expect(nonNumberFallback(100, 1)).toBe(100);
        expect(nonNumberFallback(-1, 1)).toBe(-1);
        expect(nonNumberFallback(-1, -1)).toBe(-1);
        expect(nonNumberFallback(true, -1)).toBe(-1);
        expect(nonNumberFallback(false, 100)).toBe(100);
        expect(nonNumberFallback("0", 4)).toBe(0);
        expect(nonNumberFallback("lorem ipsum", 4)).toBe(4);
        expect(nonNumberFallback("99", 4)).toBe(99);
        expect(nonNumberFallback("lorem 99", 4)).toBe(4);
        expect(nonNumberFallback("99 lorem", 4)).toBe(99);
        expect(nonNumberFallback("99.123", 123)).toBe(99.123);
    });
});
