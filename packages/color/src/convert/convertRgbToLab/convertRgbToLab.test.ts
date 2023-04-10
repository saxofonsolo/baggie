import { convertRgbToLab } from "./convertRgbToLab";

describe("convertRgbToLab", () => {
    test("Red", () => {
        expect(
            convertRgbToLab({
                red: 255,
                green: 0,
                blue: 0,
            }),
        ).toEqual(
            expect.objectContaining({
                l: 0.5323288178584246,
                a: 80.10930952982204,
                b: 67.22006831026425,
                alpha: 1,
            }),
        );
    });

    test("Lime", () => {
        expect(
            convertRgbToLab({
                red: 0,
                green: 255,
                blue: 0,
            }),
        ).toEqual(
            expect.objectContaining({
                l: 0.8773703347354421,
                a: -86.1846364976253,
                b: 83.18116474777854,
                alpha: 1,
            }),
        );
    });

    test("Blue", () => {
        expect(
            convertRgbToLab({
                red: 0,
                green: 0,
                blue: 255,
            }),
        ).toEqual(
            expect.objectContaining({
                l: 0.32302586667249483,
                a: 79.19666178930935,
                b: -107.8636810449517,
                alpha: 1,
            }),
        );
    });

    test("Alpha", () => {
        expect(
            convertRgbToLab({
                red: 0,
                green: 0,
                blue: 255,
                alpha: 0.5,
            }),
        ).toEqual(
            expect.objectContaining({
                l: 0.32302586667249483,
                a: 79.19666178930935,
                b: -107.8636810449517,
                alpha: 0.5,
            }),
        );
    });
});
