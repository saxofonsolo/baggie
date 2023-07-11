import { getRange } from "./getRange";

describe("getRange", () => {
    test("Get the range of an array of multiple numbers in order", () => {
        expect(getRange([4, 8, 15, 16, 23, 42])).toBe(38);
    });

    test("Get the range of an array of multiple numbers out of order", () => {
        expect(getRange([15, 8, 16, 42, 23, 4])).toBe(38);
    });

    test("Get the range of an array of 1 number", () => {
        expect(getRange([42])).toBe(0);
    });

    test("Get the range of an empty array", () => {
        expect(getRange([])).toBe(0);
    });
});
