import { getColorSchemeTriadic } from "./getColorSchemeTriadic";

describe("getColorSchemeTriadic", () => {
    test("Get colors", () => {
        expect(getColorSchemeTriadic("#ffff00")).toEqual([
            "#ffff00",
            "#00ffff",
            "#ff00ff",
        ]);
    });
});
