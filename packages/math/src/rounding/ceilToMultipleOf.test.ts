import { ceilToMultipleOf } from "./ceilToMultipleOf";

describe("ceilToMultipleOf", () => {
    test("Nearest 10", () => {
        expect(ceilToMultipleOf(-13.345, 10)).toBe(-10);
        expect(ceilToMultipleOf(13.945, 10)).toBe(20);
        expect(ceilToMultipleOf(13.1111, 10)).toBe(20);
        expect(ceilToMultipleOf(10, 10)).toBe(10);
        expect(ceilToMultipleOf(10.00001, 10)).toBe(20);
    });

    test("Nearest 5", () => {
        expect(ceilToMultipleOf(-13.345, 5)).toBe(-10);
        expect(ceilToMultipleOf(13, 5)).toBe(15);
        expect(ceilToMultipleOf(15, 5)).toBe(15);
        expect(ceilToMultipleOf(15.00001, 5)).toBe(20);
        expect(ceilToMultipleOf(13.345, 5)).toBe(15);
        expect(ceilToMultipleOf(13.1111, 5)).toBe(15);
    });

    test("Nearest .5", () => {
        expect(ceilToMultipleOf(13.345, 0.5)).toBe(13.5);
        expect(ceilToMultipleOf(-13.345, 0.5)).toBe(-13);
        expect(ceilToMultipleOf(-13.545, 0.5)).toBe(-13.5);
        expect(ceilToMultipleOf(13.345, 0.5)).toBe(13.5);
        expect(ceilToMultipleOf(13.1111, 0.5)).toBe(13.5);
        expect(ceilToMultipleOf(13.6, 0.5)).toBe(14);
        expect(ceilToMultipleOf(13.5, 0.5)).toBe(13.5);
        expect(ceilToMultipleOf(13, 0.5)).toBe(13);
    });

    test("Other", () => {
        expect(ceilToMultipleOf(13.345, 2)).toBe(14);
        expect(ceilToMultipleOf(13.1111, 4)).toBe(16);
        expect(ceilToMultipleOf(13.1111, 0.2)).toBe(13.2);
        expect(ceilToMultipleOf(-13.3, 0.2)).toBe(-13.2);
        expect(ceilToMultipleOf(13, 0.2)).toBe(13);
        expect(ceilToMultipleOf(13, 0.3)).toBe(13.2);
        expect(ceilToMultipleOf(-13, 0.3)).toBe(-12.9);
        expect(ceilToMultipleOf(25.245, 0.25)).toBe(25.25);
    });
});
