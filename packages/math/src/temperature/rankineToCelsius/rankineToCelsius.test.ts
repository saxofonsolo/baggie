import { rankineToCelsius } from "./rankineToCelsius";

describe("rankineToCelsius", () => {
    test("Convert Rankine to Celsius", () => {
        expect(rankineToCelsius(491.67)).toBe(0);
        expect(rankineToCelsius(671.6700000000001)).toBe(100.00000000000004);
        expect(rankineToCelsius(851.6700000000001)).toBe(200.00000000000003);
    });
});
