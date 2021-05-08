import { convertRangePosition } from "./convertRangePosition";

describe("convertRangePosition", () => {
    test("Convert the position in a range to the position in another range", () => {
        expect(
            convertRangePosition(
                {
                    from: 0,
                    to: 10,
                    position: 5,
                },
                { from: -10, to: 0 }
            )
        ).toBe(-5);

        expect(
            convertRangePosition(
                {
                    from: -10,
                    to: 10,
                    position: 0,
                },
                { from: 100, to: 110 }
            )
        ).toBe(105);

        expect(
            convertRangePosition(
                {
                    from: 1,
                    to: 3,
                    position: 2,
                },
                { from: 1, to: 3 }
            )
        ).toBe(2);
    });

    test("Weird numbers", () => {
        expect(
            convertRangePosition(
                {
                    from: 0,
                    to: 0,
                    position: 0,
                },
                { from: 0, to: 0 }
            )
        ).toBe(NaN);

        expect(
            convertRangePosition(
                {
                    from: 0,
                    to: 0,
                    position: 0,
                },
                { from: 0, to: 10 }
            )
        ).toBe(NaN);

        expect(
            convertRangePosition(
                {
                    from: 0,
                    to: 10,
                    position: 5,
                },
                { from: 0, to: 0 }
            )
        ).toBe(0);
    });
});
