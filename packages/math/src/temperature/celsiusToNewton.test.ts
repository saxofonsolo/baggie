import { celsiusToNewton } from "./celsiusToNewton";

describe("celsiusToNewton", () => {
    test("Convert Celsius to Newton", () => {
        expect(celsiusToNewton(-273.15)).toBe(-90.13949999999998);
        expect(celsiusToNewton(0)).toBe(0);
        expect(celsiusToNewton(100)).toBe(33);
        expect(celsiusToNewton(200)).toBe(66);
        expect(celsiusToNewton(300)).toBe(99);
    });
});
