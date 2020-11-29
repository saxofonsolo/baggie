import { roemerToCelsius } from "./roemerToCelsius";

describe("roemerToCelsius", () => {
    test("Convert Rankine to Celsius", () => {
        expect(roemerToCelsius(-135.90375)).toBe(-273.15);
        expect(roemerToCelsius(7.5)).toBe(0);
        expect(roemerToCelsius(60)).toBe(100);
        expect(roemerToCelsius(112.5)).toBe(200);
        expect(roemerToCelsius(165)).toBe(300);
    });
});
