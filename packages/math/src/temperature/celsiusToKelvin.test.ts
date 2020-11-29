import { celsiusToKelvin } from "./celsiusToKelvin";

describe("celsiusToKelvin", () => {
    test("Convert Celsius to Kelvin", () => {
        expect(celsiusToKelvin(-273.15)).toBe(0);
        expect(celsiusToKelvin(0)).toBe(273.15);
        expect(celsiusToKelvin(100)).toBe(373.15);
        expect(celsiusToKelvin(200)).toBe(473.15);
        expect(celsiusToKelvin(300)).toBe(573.15);
    });
});
