import { getTetradicColorScheme } from "./getTetradicColorScheme";

describe("getTetradicColorScheme", () => {
    test("Get colors", () => {
        expect(getTetradicColorScheme("#ffff00")).toEqual([
            "#ffff00",
            "#00ff80",
            "#0000ff",
            "#ff0080",
        ]);
    });
});
