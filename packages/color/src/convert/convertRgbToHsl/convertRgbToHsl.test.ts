import { convertRgbToHsl } from "./convertRgbToHsl";

describe("convertHslToRgb", () => {
    test("Red", () => {
        expect(
            convertRgbToHsl({
                red: 255,
                green: 0,
                blue: 0,
            }),
        ).toEqual(
            expect.objectContaining({
                hue: 0,
                saturation: 1,
                lightness: 0.5,
                alpha: 1,
            }),
        );
    });

    test("Lime", () => {
        expect(
            convertRgbToHsl({
                red: 0,
                green: 255,
                blue: 0,
            }),
        ).toEqual(
            expect.objectContaining({
                hue: 120,
                saturation: 1,
                lightness: 0.5,
                alpha: 1,
            }),
        );
    });

    test("Blue", () => {
        expect(
            convertRgbToHsl({
                red: 0,
                green: 0,
                blue: 255,
            }),
        ).toEqual(
            expect.objectContaining({
                hue: 240,
                saturation: 1,
                lightness: 0.5,
                alpha: 1,
            }),
        );
    });

    test("Alpha", () => {
        expect(
            convertRgbToHsl({
                red: 0,
                green: 0,
                blue: 255,
                alpha: 0.5,
            }),
        ).toEqual(
            expect.objectContaining({
                hue: 240,
                saturation: 1,
                lightness: 0.5,
                alpha: 0.5,
            }),
        );
    });
});
