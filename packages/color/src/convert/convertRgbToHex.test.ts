import { convertRgbToHex } from "./convertRgbToHex";

describe("convertRgbToHex", () => {
    test("Red", () => {
        expect(
            convertRgbToHex({
                red: 255,
                green: 0,
                blue: 0,
            })
        ).toBe("#ff0000");
    });

    test("Lime", () => {
        expect(
            convertRgbToHex({
                red: 0,
                green: 255,
                blue: 0,
            })
        ).toBe("#00ff00");
    });

    test("Blue", () => {
        expect(
            convertRgbToHex({
                red: 0,
                green: 0,
                blue: 255,
            })
        ).toBe("#0000ff");
    });

    test("Alpha", () => {
        expect(
            convertRgbToHex({
                red: 0,
                green: 0,
                blue: 255,
                alpha: 0.5,
            })
        ).toBe("#0000ff80");
    });

    test("No alpha", () => {
        expect(
            convertRgbToHex(
                {
                    red: 0,
                    green: 0,
                    blue: 255,
                    alpha: 0.5,
                },
                false
            )
        ).toBe("#0000ff");
    });

    test("Force alpha", () => {
        expect(
            convertRgbToHex(
                {
                    red: 0,
                    green: 0,
                    blue: 255,
                },
                true
            )
        ).toBe("#0000ffff");
    });
});
