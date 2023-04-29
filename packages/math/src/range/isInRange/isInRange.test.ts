import { isInRange } from "./isInRange";

describe("isInRange", () => {
    test("Use with numbers in range", () => {
        expect(isInRange(0, [0, 1])).toBe(true);
        expect(isInRange(1, [0, 1])).toBe(true);
        expect(isInRange(5, [0, 10])).toBe(true);
    });

    test("Use with numbers not in range", () => {
        expect(isInRange(-1, [0, 1])).toBe(false);
        expect(isInRange(2, [0, 1])).toBe(false);
        expect(isInRange(Infinity, [0, 10])).toBe(false);
    });

    test("Use with multiple ranges", () => {
        expect(
            isInRange(0, [
                [0, 1],
                [10, 20],
            ]),
        ).toBe(true);
        expect(
            isInRange(1, [
                [0, 1],
                [0, 10],
            ]),
        ).toBe(true);
        expect(
            isInRange(5, [
                [0, 10],
                [100, 200],
                [-100, 100],
            ]),
        ).toBe(true);
        expect(
            isInRange(-500, [
                [0, 10],
                [100, 200],
                [-100, 100],
            ]),
        ).toBe(false);
        expect(
            isInRange(500, [
                [0, 10],
                [100, 200],
                [-100, 100],
            ]),
        ).toBe(false);
    });
});
