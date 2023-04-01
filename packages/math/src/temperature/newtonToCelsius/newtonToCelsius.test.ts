import { newtonToCelsius } from "./newtonToCelsius";

describe("newtonToCelsius", () => {
    test("Convert Newton to Celsius", () => {
        expect(newtonToCelsius(-90.13949999999998)).toBe(-273.15);
        expect(newtonToCelsius(0)).toBe(0);
        expect(newtonToCelsius(33)).toBe(100);
        expect(newtonToCelsius(66)).toBe(200);
        expect(newtonToCelsius(99)).toBe(300);
    });
});
