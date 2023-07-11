import { getPositionBetween } from "./getPositionBetween";

describe("getPositionBetween", () => {
    test("Get position between two number", () => {
        expect(getPositionBetween(10, 20, 0.5)).toBe(15);
        expect(getPositionBetween(-1, 1, 0.5)).toBe(0);
        expect(getPositionBetween(1, -1, 0.5)).toBe(0);
        expect(getPositionBetween(-1, 9, 0.1)).toBe(0);
        expect(getPositionBetween(-9, 1, 0.9)).toBe(0);
        expect(getPositionBetween(0.9, 1, 3)).toBe(1.2);
    });

    test("Weird numbers", () => {
        expect(getPositionBetween(0, 0, 0)).toBe(0);
        expect(getPositionBetween(1, 1, 1)).toBe(1);
        expect(getPositionBetween(1, 1, 0)).toBe(1);
        expect(getPositionBetween(1, 1, 2)).toBe(1);
    });
});
