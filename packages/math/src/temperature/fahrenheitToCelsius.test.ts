import { fahrenheitToCelsius } from "./fahrenheitToCelsius";

describe("fahrenheitToCelsius", () => {
    test("Convert Fahrenheit to Celsius", () => {
        expect(fahrenheitToCelsius(-459.66999999999996)).toBe(-273.15);
        expect(fahrenheitToCelsius(32)).toBe(0);
        expect(fahrenheitToCelsius(212)).toBe(100);
        expect(fahrenheitToCelsius(392)).toBe(200);
        expect(fahrenheitToCelsius(572)).toBe(300);
    });
});
