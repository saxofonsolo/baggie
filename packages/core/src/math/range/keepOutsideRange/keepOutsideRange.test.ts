import { keepOutsideRange } from "./keepOutsideRange";

describe("keepOutsideRange", () => {
    test("Use with number in range", () => {
        expect(keepOutsideRange(5, [0, 10])).toBe(10);
        expect(keepOutsideRange(4.999, [0, 10])).toBe(0);
        expect(keepOutsideRange(10, [0, 10])).toBe(10);
        expect(keepOutsideRange(0.001, [0, 10])).toBe(0);
    });

    test("Use with number not in range", () => {
        expect(keepOutsideRange(-5, [0, 10])).toBe(-5);
        expect(keepOutsideRange(500, [0, 10])).toBe(500);
    });

    test("Multiple ranges", () => {
        expect(
            keepOutsideRange(50, [
                [0, 10],
                [20, 30],
                [40, 55],
            ]),
        ).toBe(55);
        expect(
            keepOutsideRange(20, [
                [0, 10],
                [20, 30],
                [40, 55],
            ]),
        ).toBe(20);
        expect(
            keepOutsideRange(22, [
                [0, 10],
                [20, 30],
                [40, 55],
            ]),
        ).toBe(20);
        expect(
            keepOutsideRange(44, [
                [0, 10],
                [20, 30],
                [40, 55],
            ]),
        ).toBe(40);
        expect(
            keepOutsideRange(20, [
                [0, 10],
                [10, 30],
                [40, 55],
            ]),
        ).toBe(30);
        expect(
            keepOutsideRange(
                10,
                [
                    [0, 10],
                    [10, 30],
                    [30, 55],
                ],
                false,
            ),
        ).toBe(10);
        expect(
            keepOutsideRange(10, [
                [0, 10],
                [10, 30],
                [30, 55],
            ]),
        ).toBe(0);
        expect(
            keepOutsideRange(9, [
                [0, 10],
                [5, 20],
                [15, 25],
            ]),
        ).toBe(0);
    });
});
