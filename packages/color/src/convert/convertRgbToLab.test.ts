import { convertRgbToLab } from "./convertRgbToLab";

describe("convertRgbToLab", () => {
    test("Red", () => {
        expect(
            convertRgbToLab({
                red: 255,
                green: 0,
                blue: 0,
            })
        ).toEqual(
            expect.objectContaining({
                l: 0.532,
                a: 80.109,
                b: 67.22,
                alpha: 1,
            })
        );
    });

    test("Lime", () => {
        expect(
            convertRgbToLab({
                red: 0,
                green: 255,
                blue: 0,
            })
        ).toEqual(
            expect.objectContaining({
                l: 0.877,
                a: -86.185,
                b: 83.181,
                alpha: 1,
            })
        );
    });

    test("Blue", () => {
        expect(
            convertRgbToLab({
                red: 0,
                green: 0,
                blue: 255,
            })
        ).toEqual(
            expect.objectContaining({
                l: 0.323,
                a: 79.197,
                b: -107.864,
                alpha: 1,
            })
        );
    });

    test("Alpha", () => {
        expect(
            convertRgbToLab({
                red: 0,
                green: 0,
                blue: 255,
                alpha: 0.5,
            })
        ).toEqual(
            expect.objectContaining({
                l: 0.323,
                a: 79.197,
                b: -107.864,
                alpha: 0.5,
            })
        );
    });
});
