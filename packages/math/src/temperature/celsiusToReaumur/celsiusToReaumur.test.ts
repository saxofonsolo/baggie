import { celsiusToReaumur } from "./celsiusToReaumur";

describe("celsiusToReaumur", () => {
    test("Convert Celsius to Reaumur", () => {
        expect(celsiusToReaumur(-273.15)).toBe(-218.51999999999998);
        expect(celsiusToReaumur(0)).toBe(0);
        expect(celsiusToReaumur(100)).toBe(80);
        expect(celsiusToReaumur(200)).toBe(160);
        expect(celsiusToReaumur(300)).toBe(240);
    });
});
