import { getPercentage } from "./getPercentage";

describe("getPercentage", () => {
    test("Get percentage", () => {
        expect(getPercentage({ part: 5, whole: 50 })).toBe(10);
    });

    test("Get part", () => {
        expect(getPercentage({ whole: 50, percentage: 10 })).toBe(5);
    });

    test("Get whole", () => {
        expect(getPercentage({ part: 5, percentage: 10 })).toBe(50);
    });

    test("All zeros", () => {
        expect(getPercentage({ part: 0, whole: 0 })).toBe(0);
        expect(getPercentage({ whole: 0, percentage: 0 })).toBe(0);
        expect(getPercentage({ part: 0, percentage: 0 })).toBe(0);
    });
});
