import { floorToMultipleOf } from "./floorToMultipleOf";

describe("floorToMultipleOf", () => {
    test("Nearest 10", () => {
        expect(floorToMultipleOf(-13.345, 10)).toBe(-20);
        expect(floorToMultipleOf(13.945, 10)).toBe(10);
        expect(floorToMultipleOf(13.1111, 10)).toBe(10);
        expect(floorToMultipleOf(10, 10)).toBe(10);
        expect(floorToMultipleOf(19.9999, 10)).toBe(10);
    });

    test("Nearest 5", () => {
        expect(floorToMultipleOf(-13.345, 5)).toBe(-15);
        expect(floorToMultipleOf(13, 5)).toBe(10);
        expect(floorToMultipleOf(15, 5)).toBe(15);
        expect(floorToMultipleOf(15.00001, 5)).toBe(15);
        expect(floorToMultipleOf(13.345, 5)).toBe(10);
        expect(floorToMultipleOf(13.1111, 5)).toBe(10);
    });

    test("Nearest .5", () => {
        expect(floorToMultipleOf(13.345, 0.5)).toBe(13);
        expect(floorToMultipleOf(-13.345, 0.5)).toBe(-13.5);
        expect(floorToMultipleOf(-13.545, 0.5)).toBe(-14);
        expect(floorToMultipleOf(13.345, 0.5)).toBe(13);
        expect(floorToMultipleOf(13.1111, 0.5)).toBe(13);
        expect(floorToMultipleOf(13.6, 0.5)).toBe(13.5);
        expect(floorToMultipleOf(13.5, 0.5)).toBe(13.5);
        expect(floorToMultipleOf(13, 0.5)).toBe(13);
    });

    test("Other", () => {
        expect(floorToMultipleOf(13.345, 2)).toBe(12);
        expect(floorToMultipleOf(13.1111, 4)).toBe(12);
        expect(floorToMultipleOf(13.3111, 0.2)).toBe(13.2);
        expect(floorToMultipleOf(-13.3, 0.2)).toBe(-13.4);
        expect(floorToMultipleOf(13, 0.2)).toBe(13);
        expect(floorToMultipleOf(13, 0.3)).toBe(12.9);
        expect(floorToMultipleOf(-13, 0.3)).toBe(-13.2);
        expect(floorToMultipleOf(25.255, 0.25)).toBe(25.25);
    });
});
