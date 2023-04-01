import { getMean } from "./getMean";

describe("getMean", () => {
    test("Get the mean of an array of 1 number", () => {
        expect(getMean([822])).toBe(822);
    });

    test("Get the mean of an array of 2 numbers", () => {
        expect(getMean([4, 822])).toBe(413);
    });

    test("Get the mean of an array of 6 numbers", () => {
        expect(getMean([4, 8, 15, 16, 23, 42])).toBe(18);
    });
});
