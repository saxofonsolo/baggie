import { roundToMultipleOf } from "./roundToMultipleOf";

describe("roundToMultipleOf", () => {
    test("Nearest 10", () => {
        expect(roundToMultipleOf(-13.345, 10)).toBe(-10);
        expect(roundToMultipleOf(13.945, 10)).toBe(10);
        expect(roundToMultipleOf(13.1111, 10)).toBe(10);
        expect(roundToMultipleOf(10, 10)).toBe(10);
        expect(roundToMultipleOf(19.9999, 10)).toBe(20);
    });

    test("Nearest 5", () => {
        expect(roundToMultipleOf(-13.345, 5)).toBe(-15);
        expect(roundToMultipleOf(13, 5)).toBe(15);
        expect(roundToMultipleOf(15, 5)).toBe(15);
        expect(roundToMultipleOf(15.00001, 5)).toBe(15);
        expect(roundToMultipleOf(13.345, 5)).toBe(15);
        expect(roundToMultipleOf(12.1111, 5)).toBe(10);
    });

    test("Nearest .5", () => {
        expect(roundToMultipleOf(13.345, 0.5)).toBe(13.5);
        expect(roundToMultipleOf(-13.345, 0.5)).toBe(-13.5);
        expect(roundToMultipleOf(-13.545, 0.5)).toBe(-13.5);
        expect(roundToMultipleOf(13.345, 0.5)).toBe(13.5);
        expect(roundToMultipleOf(13.1111, 0.5)).toBe(13);
        expect(roundToMultipleOf(13.6, 0.5)).toBe(13.5);
        expect(roundToMultipleOf(13.5, 0.5)).toBe(13.5);
        expect(roundToMultipleOf(13, 0.5)).toBe(13);
    });

    test("Other", () => {
        expect(roundToMultipleOf(13.345, 2)).toBe(14);
        expect(roundToMultipleOf(13.1111, 4)).toBe(12);
        expect(roundToMultipleOf(13.3111, 0.2)).toBe(13.4);
        expect(roundToMultipleOf(-13.3, 0.2)).toBe(-13.2);
        expect(roundToMultipleOf(13, 0.2)).toBe(13);
        expect(roundToMultipleOf(13, 0.3)).toBe(12.9);
        expect(roundToMultipleOf(-13, 0.3)).toBe(-12.9);
        expect(roundToMultipleOf(25.255, 0.25)).toBe(25.25);
    });
});
