import { getBrightness } from "./getBrightness";

describe("getBrightness", () => {
    test("White", () => {
        expect(getBrightness({ red: 255, green: 255, blue: 255 })).toBe(1);
    });

    test("Black", () => {
        expect(getBrightness({ red: 0, green: 0, blue: 0 })).toBe(0);
    });

    test("Grey", () => {
        expect(getBrightness({ red: 127, green: 127, blue: 127 })).toBe(
            0.4980392156862745
        );
    });
});
