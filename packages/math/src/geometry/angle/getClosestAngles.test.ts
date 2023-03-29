import { getClosestAngles } from "./getClosestAngles";

describe("getClosestAngles", () => {
    test("Get a sorted array", () => {
        expect(getClosestAngles(350, [0, 10, 100, 200, 300])).toEqual([
            0, 10, 300, 100, 200,
        ]);

        expect(getClosestAngles(35, [0, 10, 100, 200, 300])).toEqual([
            10, 0, 100, 300, 200,
        ]);

        expect(getClosestAngles(35, [])).toEqual([]);
    });
});
