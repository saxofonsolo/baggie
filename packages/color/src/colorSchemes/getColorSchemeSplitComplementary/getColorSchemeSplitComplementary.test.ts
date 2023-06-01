import { getColorSchemeSplitComplementary } from "./getColorSchemeSplitComplementary";

describe("getColorSchemeSplitComplementary", () => {
    test("Get colors", () => {
        expect(getColorSchemeSplitComplementary("#ffff00")).toEqual([
            "#ffff00",
            "#00ff33",
            "#9900ff",
        ]);
    });
});
