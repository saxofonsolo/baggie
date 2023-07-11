import { getPercentageBetween } from "./getPercentageBetween";

describe("getPercentageBetween", () => {
    test("Get percentage between two number", () => {
        expect(getPercentageBetween(15, { from: 10, to: 20 })).toBe(0.5);
        expect(getPercentageBetween(0, { from: -1, to: 1 })).toBe(0.5);
        expect(getPercentageBetween(0, { from: 1, to: -1 })).toBe(0.5);
        expect(getPercentageBetween(0, { from: -1, to: 9 })).toBe(0.1);
        expect(getPercentageBetween(0, { from: -9, to: 1 })).toBe(0.9);
    });

    test("Invalid numbers", () => {
        expect(getPercentageBetween(0, { from: 0, to: 0 })).toBe(NaN);
        expect(getPercentageBetween(1, { from: 1, to: 1 })).toBe(NaN);
        expect(getPercentageBetween(0, { from: 1, to: 1 })).toBe(-Infinity);
        expect(getPercentageBetween(2, { from: 1, to: 1 })).toBe(Infinity);
    });
});
