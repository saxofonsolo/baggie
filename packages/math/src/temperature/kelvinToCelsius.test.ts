import { kelvinToCelsius } from "./kelvinToCelsius";

describe("kelvinToCelsius", () => {
    test("Convert Kelvin to Celsius", () => {
        expect(kelvinToCelsius(0)).toBe(-273.15);
        expect(kelvinToCelsius(273.15)).toBe(0);
        expect(kelvinToCelsius(373.15)).toBe(100);
        expect(kelvinToCelsius(473.15)).toBe(200);
        expect(kelvinToCelsius(573.15)).toBe(300);
    });
});
