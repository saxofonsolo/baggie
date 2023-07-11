import { celsiusToRoemer } from "./celsiusToRoemer";

describe("celsiusToRoemer", () => {
    test("Convert Celsius to Roemer", () => {
        expect(celsiusToRoemer(-273.15)).toBe(-135.90375);
        expect(celsiusToRoemer(0)).toBe(7.5);
        expect(celsiusToRoemer(100)).toBe(60);
        expect(celsiusToRoemer(200)).toBe(112.5);
        expect(celsiusToRoemer(300)).toBe(165);
    });
});
