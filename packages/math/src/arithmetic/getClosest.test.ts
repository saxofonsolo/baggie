import { getClosest } from "./getClosest";

describe("getClosest", () => {
    test("Get array sorted by closest numbers", () => {
        expect(getClosest(8, [5, 10, 15, 20])).toStrictEqual([10, 5, 15, 20]);

        expect(getClosest(-8, [5, 10, -15, 20])).toStrictEqual([
            -15, 5, 10, 20,
        ]);

        expect(getClosest(-8, [])).toStrictEqual([]);
    });
});
