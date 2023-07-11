import { isInsideRadius } from "./isInsideRadius";

describe("isInsideRadius", () => {
    test("Inside radius", () => {
        expect(isInsideRadius({ x: 20, y: 30 }, 100)).toBe(true);
    });

    test("Outside radius", () => {
        expect(isInsideRadius({ x: 20, y: 30 }, 35)).toBe(false);
    });
});
