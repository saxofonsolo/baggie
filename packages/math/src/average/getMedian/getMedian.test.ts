import { getMedian } from "./getMedian";

describe("getMedian", () => {
    test("Get the median of an array of 1 number", () => {
        expect(getMedian([4])).toBe(4);
    });

    test("Get the median of an odd number of numbers", () => {
        expect(getMedian([4, 8, 15, 23, 42])).toBe(15);
    });

    test("Get the median of an even number of numbers", () => {
        expect(getMedian([4, 8, 15, 16, 23, 42])).toBe(15.5);
    });

    test("Get the median of negative numbers", () => {
        expect(getMedian([-4, -8])).toBe(-6);
    });

    test("Get the median of positive and negative numbers", () => {
        expect(getMedian([4, -8])).toBe(-2);
    });

    test("Get the median of an empty array", () => {
        expect(getMedian([])).toBe(0);
    });
});
