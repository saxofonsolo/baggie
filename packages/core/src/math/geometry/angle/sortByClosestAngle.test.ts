import { sortByClosestAngle } from "./sortByClosestAngle";

describe("sortByClosestAngle", () => {
    test("Get a sorted array", () => {
        expect(sortByClosestAngle(350, [0, 10, 100, 200, 300])).toEqual([
            0, 10, 300, 100, 200,
        ]);

        expect(sortByClosestAngle(35, [0, 10, 100, 200, 300])).toEqual([
            10, 0, 100, 300, 200,
        ]);

        expect(sortByClosestAngle(35, [])).toEqual([]);
    });
});
