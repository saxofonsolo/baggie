import { getDarkness } from "./getDarkness";

describe("getDarkness", () => {
    test("White", () => {
        expect(getDarkness({ red: 255, green: 255, blue: 255 })).toBe(0);
    });

    test("Black", () => {
        expect(getDarkness({ red: 0, green: 0, blue: 0 })).toBe(1);
    });

    test("Grey", () => {
        expect(getDarkness({ red: 127, green: 127, blue: 127 })).toBe(
            0.5019607843137255
        );
    });
});
