import { mergeIntervals } from "./mergeIntervals";

describe("mergeIntervals", () => {
    test("Non-overlapping intervals", () => {
        expect(
            mergeIntervals([
                { from: 0, to: 10 },
                { from: 20, to: 30 },
                { from: 40, to: 50 },
            ]),
        ).toStrictEqual([
            { from: 0, to: 10 },
            { from: 20, to: 30 },
            { from: 40, to: 50 },
        ]);
        expect(
            mergeIntervals([
                [0, 10],
                [20, 30],
                [40, 50],
            ]),
        ).toStrictEqual([
            { from: 0, to: 10 },
            { from: 20, to: 30 },
            { from: 40, to: 50 },
        ]);
    });

    test("Overlapping intervals", () => {
        expect(
            mergeIntervals([
                { from: 0, to: 10 },
                { from: 5, to: 20 },
                { from: 15, to: 30 },
            ]),
        ).toStrictEqual([{ from: 0, to: 30 }]);
        expect(
            mergeIntervals([
                [0, 10],
                [5, 20],
                [15, 30],
            ]),
        ).toStrictEqual([{ from: 0, to: 30 }]);
    });

    test("Overlapping intervals with equal edge points", () => {
        expect(
            mergeIntervals([
                { from: 0, to: 10 },
                { from: 10, to: 20 },
                { from: 20, to: 30 },
            ]),
        ).toStrictEqual([{ from: 0, to: 30 }]);
        expect(
            mergeIntervals(
                [
                    [0, 10],
                    [10, 20],
                    [20, 30],
                ],
                false,
            ),
        ).toStrictEqual([
            { from: 0, to: 10 },
            { from: 10, to: 20 },
            { from: 20, to: 30 },
        ]);
    });

    test("Single interval values", () => {
        expect(mergeIntervals([0, 10])).toStrictEqual([{ from: 0, to: 10 }]);
        expect(mergeIntervals({ from: 0, to: 10 })).toStrictEqual([
            { from: 0, to: 10 },
        ]);
    });
});
