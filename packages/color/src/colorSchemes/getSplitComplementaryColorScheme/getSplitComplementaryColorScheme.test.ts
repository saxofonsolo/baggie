import { getSplitComplementaryColorScheme } from "./getSplitComplementaryColorScheme";

describe("getSplitComplementaryColorScheme", () => {
    test("Get colors", () => {
        expect(getSplitComplementaryColorScheme("#ffff00")).toEqual([
            "#ffff00",
            "#00ff33",
            "#9900ff",
        ]);
    });
});
