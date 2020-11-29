import { celsiusToDelisle } from "./celsiusToDelisle";

describe("celsiusToDelisle", () => {
    test("Convert Celsius to Delisle", () => {
        expect(celsiusToDelisle(-273.15)).toBe(559.7249999999999);
        expect(celsiusToDelisle(0)).toBe(150);
        expect(celsiusToDelisle(100)).toBe(0);
        expect(celsiusToDelisle(200)).toBe(-150);
        expect(celsiusToDelisle(300)).toBe(-300);
    });
});
