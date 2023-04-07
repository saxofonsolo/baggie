import { getHalfLifeDecay } from "./getHalfLifeDecay";

describe("getHalfLifeDecay", () => {
    test("Calculate the half life decay", () => {
        expect(getHalfLifeDecay(1, 0, 1000)).toBe(1);
        expect(getHalfLifeDecay(1, 1000, 1000)).toBe(0.5);
        expect(getHalfLifeDecay(1, 2000, 1000)).toBe(0.25);
    });
});
