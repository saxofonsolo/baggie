import { rankineToCelsius } from "./rankineToCelsius";

describe("rankineToCelsius", () => {
    test("Convert Rankine to Celsius", () => {
        expect(rankineToCelsius(5.684341886080802e-14)).toBe(-273.15);
        expect(rankineToCelsius(491.67)).toBe(0);
        expect(rankineToCelsius(671.6700000000001)).toBe(100.00000000000004);
        expect(rankineToCelsius(851.6700000000001)).toBe(200.00000000000003);
        expect(rankineToCelsius(1031.67)).toBe(300.00000000000001);
    });
});
