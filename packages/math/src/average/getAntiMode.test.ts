import { getAntiMode } from "./getAntiMode";

describe("getAntiMode", () => {
    test("Get a single anti mode value of an array", () => {
        expect(
            getAntiMode([4, 8, 8, 15, 15, 16, 16, 42, 42, 42])
        ).toMatchObject({
            antiMode: [4],
            frequency: 1,
        });
    });

    test("Get a single anti mode value of an array (larger frequency)", () => {
        expect(
            getAntiMode([3, 3, 3, 3, 4, 4, 8, 8, 8, 16, 16, 16, 42, 42, 42])
        ).toMatchObject({
            antiMode: [4],
            frequency: 2,
        });
    });

    test("Get multiple anti mode values of an array", () => {
        expect(getAntiMode([4, 8, 8, 8, 15, 16, 23, 42, 42, 42])).toMatchObject(
            {
                antiMode: [4, 15, 16, 23],
                frequency: 1,
            }
        );
    });

    test("Get the anti mode value of an array of 1 number", () => {
        expect(getAntiMode([4])).toMatchObject({
            antiMode: [4],
            frequency: 1,
        });
    });

    test("Get the anti mode value of an empty array", () => {
        expect(getAntiMode([])).toMatchObject({
            antiMode: [],
            frequency: 0,
        });
    });
});
