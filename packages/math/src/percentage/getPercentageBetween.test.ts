import { getPercentageBetween } from "./getPercentageBetween";

describe("getPercentageBetween", () => {
    test("Get percentage between two number", () => {
        expect(getPercentageBetween(10, 20, 15)).toBe(0.5);
        expect(getPercentageBetween(-1, 1, 0)).toBe(0.5);
        expect(getPercentageBetween(1, -1, 0)).toBe(0.5);
        expect(getPercentageBetween(-1, 9, 0)).toBe(0.1);
        expect(getPercentageBetween(-9, 1, 0)).toBe(0.9);
    });

    test("Invalid numbers", () => {
        expect(getPercentageBetween(0, 0, 0)).toBe(NaN);
        expect(getPercentageBetween(1, 1, 1)).toBe(NaN);
        expect(getPercentageBetween(1, 1, 0)).toBe(-Infinity);
        expect(getPercentageBetween(1, 1, 2)).toBe(Infinity);
    });
});
