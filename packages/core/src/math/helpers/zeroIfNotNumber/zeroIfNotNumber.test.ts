import { zeroIfNotNumber } from "./zeroIfNotNumber";

describe("zeroIfNotNumber", () => {
    test("zeroIfNotNumber", () => {
        expect(zeroIfNotNumber(100)).toBe(100);
        expect(zeroIfNotNumber(true)).toBe(0);
        expect(zeroIfNotNumber(false)).toBe(0);
        expect(zeroIfNotNumber("lorem ipsum")).toBe(0);
        expect(zeroIfNotNumber("99")).toBe(99);
        expect(zeroIfNotNumber("lorem 99")).toBe(0);
        expect(zeroIfNotNumber("99 lorem")).toBe(99);
        expect(zeroIfNotNumber("99.123")).toBe(99.123);
    });
});
