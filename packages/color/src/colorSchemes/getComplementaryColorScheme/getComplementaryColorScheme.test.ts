import { getComplementaryColorScheme } from "./getComplementaryColorScheme";

describe("getComplementaryColorScheme", () => {
    test("Get colors", () => {
        expect(getComplementaryColorScheme("#ffff00")).toEqual([
            "#ffff00",
            "#0000ff",
        ]);
    });
});
