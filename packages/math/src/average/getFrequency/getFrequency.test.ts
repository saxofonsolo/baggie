import { getFrequency } from "./getFrequency";

describe("getFrequency", () => {
    test("Get the frequency of number in an array", () => {
        expect(getFrequency([4, 8, 8, 15, 16, 23, 42, 42, 42])).toMatchObject([
            { frequency: 1, value: 4 },
            { frequency: 1, value: 15 },
            { frequency: 1, value: 16 },
            { frequency: 1, value: 23 },
            { frequency: 2, value: 8 },
            { frequency: 3, value: 42 },
        ]);
    });

    test("Get the frequency of mixed types of values in an array", () => {
        expect(
            getFrequency([
                "lorem ipsum",
                4,
                true,
                true,
                "lorem ipsum",
                false,
                "lorem ipsum",
                false,
                8,
                8,
                15,
                false,
                16,
                undefined,
                23,
                null,
                23,
                null,
                "lorem ipsum",
                42,
                42,
                42,
                "lorem ipsum",
                "dolor sit amet",
                "dolor sit amet",
            ]),
        ).toMatchObject([
            { frequency: 1, value: 4 },
            { frequency: 1, value: 15 },
            { frequency: 1, value: 16 },
            { frequency: 1, value: undefined },
            { frequency: 2, value: true },
            { frequency: 2, value: 8 },
            { frequency: 2, value: 23 },
            { frequency: 2, value: null },
            { frequency: 2, value: "dolor sit amet" },
            { frequency: 3, value: false },
            { frequency: 3, value: 42 },
            { frequency: 5, value: "lorem ipsum" },
        ]);
    });

    test("Get the frequency of an array of 1 number", () => {
        expect(getFrequency([4])).toMatchObject([{ frequency: 1, value: 4 }]);
    });

    test("Get the frequency of an empty array", () => {
        expect(getFrequency([])).toMatchObject([]);
    });
});
