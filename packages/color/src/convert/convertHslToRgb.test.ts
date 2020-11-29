import { convertHslToRgb } from "./convertHslToRgb";

describe("convertHslToRgb", () => {
    test("Red", () => {
        expect(
            convertHslToRgb({
                hue: 0,
                saturation: 1,
                lightness: 0.5,
            })
        ).toEqual(
            expect.objectContaining({
                red: 255,
                green: 0,
                blue: 0,
                alpha: 1,
            })
        );
    });

    test("Lime", () => {
        expect(
            convertHslToRgb({
                hue: 120,
                saturation: 1,
                lightness: 0.5,
            })
        ).toEqual(
            expect.objectContaining({
                red: 0,
                green: 255,
                blue: 0,
                alpha: 1,
            })
        );
    });

    test("Blue", () => {
        expect(
            convertHslToRgb({
                hue: 240,
                saturation: 1,
                lightness: 0.5,
            })
        ).toEqual(
            expect.objectContaining({
                red: 0,
                green: 0,
                blue: 255,
                alpha: 1,
            })
        );
    });

    test("Alpha", () => {
        expect(
            convertHslToRgb({
                hue: 240,
                saturation: 1,
                lightness: 0.5,
                alpha: 0.5,
            })
        ).toEqual(
            expect.objectContaining({
                red: 0,
                green: 0,
                blue: 255,
                alpha: 0.5,
            })
        );
    });
});
