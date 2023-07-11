import { convertRangePosition } from "./convertRangePosition";

describe("convertRangePosition", () => {
    test("Convert the position in a range to the position in another range", () => {
        expect(
            convertRangePosition(
                5,
                {
                    from: 0,
                    to: 10,
                },
                { from: -10, to: 0 },
            ),
        ).toBe(-5);

        expect(
            convertRangePosition(
                0,
                {
                    from: -10,
                    to: 10,
                },
                { from: 100, to: 110 },
            ),
        ).toBe(105);

        expect(
            convertRangePosition(
                2,
                {
                    from: 1,
                    to: 3,
                },
                { from: 1, to: 3 },
            ),
        ).toBe(2);
    });

    test("Weird numbers", () => {
        expect(
            convertRangePosition(
                0,
                {
                    from: 0,
                    to: 0,
                },
                { from: 0, to: 0 },
            ),
        ).toBe(NaN);

        expect(
            convertRangePosition(
                0,
                {
                    from: 0,
                    to: 0,
                },
                { from: 0, to: 10 },
            ),
        ).toBe(NaN);

        expect(
            convertRangePosition(
                5,
                {
                    from: 0,
                    to: 10,
                },
                { from: 0, to: 0 },
            ),
        ).toBe(0);
    });
});
