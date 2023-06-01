import { getColorSchemeComplementary } from "./getColorSchemeComplementary";

describe("getColorSchemeComplementary", () => {
    test("Get colors", () => {
        expect(getColorSchemeComplementary("#ffff00")).toEqual([
            "#ffff00",
            "#0000ff",
        ]);
    });
});
