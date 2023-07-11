import { celsiusToFahrenheit } from "./celsiusToFahrenheit";

describe("celsiusToFahrenheit", () => {
    test("Convert Celsius to Fahrenheit", () => {
        expect(celsiusToFahrenheit(-273.15)).toBe(-459.66999999999996);
        expect(celsiusToFahrenheit(0)).toBe(32);
        expect(celsiusToFahrenheit(100)).toBe(212);
        expect(celsiusToFahrenheit(200)).toBe(392);
        expect(celsiusToFahrenheit(300)).toBe(572);
    });
});
