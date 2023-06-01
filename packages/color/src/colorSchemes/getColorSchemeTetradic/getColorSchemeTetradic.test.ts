import { getColorSchemeTetradic } from "./getColorSchemeTetradic";

describe("getColorSchemeTetradic", () => {
    test("Get colors", () => {
        expect(getColorSchemeTetradic("#ffff00")).toEqual([
            "#ffff00",
            "#00ff80",
            "#0000ff",
            "#ff0080",
        ]);
    });
});
