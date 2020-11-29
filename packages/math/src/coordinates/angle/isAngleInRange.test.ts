import { isAngleInRange } from "./isAngleInRange";

describe("isAngleInRange", () => {
    test("Check angles", () => {
        expect(isAngleInRange(10, [5, 15])).toBe(true);
        expect(isAngleInRange(10, [0, 9], [5, 15])).toBe(true);
        expect(isAngleInRange(300, [100, 200])).toBe(false);
        expect(isAngleInRange(360, [100, 1])).toBe(true);
        expect(isAngleInRange(360, [100, -1])).toBe(false);
    });
});
