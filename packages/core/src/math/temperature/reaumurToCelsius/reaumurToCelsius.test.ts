import { reaumurToCelsius } from "./reaumurToCelsius";

describe("reaumurToCelsius", () => {
    test("Convert Rankine to Celsius", () => {
        expect(reaumurToCelsius(-218.51999999999998)).toBe(-273.15);
        expect(reaumurToCelsius(0)).toBe(0);
        expect(reaumurToCelsius(80)).toBe(100);
        expect(reaumurToCelsius(160)).toBe(200);
        expect(reaumurToCelsius(240)).toBe(300);
    });
});
