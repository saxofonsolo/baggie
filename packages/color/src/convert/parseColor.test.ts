import { parseColor } from "./parseColor";

describe("parseColor", () => {
    test("Color name", () => {
        expect(parseColor("red")).toEqual(
            expect.objectContaining({
                red: 255,
                green: 0,
                blue: 0,
                alpha: 1,
            }),
        );
    });

    test("Hex", () => {
        expect(parseColor("#ff0000")).toEqual(
            expect.objectContaining({
                red: 255,
                green: 0,
                blue: 0,
                alpha: 1,
            }),
        );
    });

    test("Hex with opacity", () => {
        expect(parseColor("#ff000000")).toEqual(
            expect.objectContaining({
                red: 255,
                green: 0,
                blue: 0,
                alpha: 0,
            }),
        );
    });

    test("Hex (3 digits)", () => {
        expect(parseColor("#f00")).toEqual(
            expect.objectContaining({
                red: 255,
                green: 0,
                blue: 0,
                alpha: 1,
            }),
        );
    });

    test("Hex (3 digits) with opacity", () => {
        expect(parseColor("#f000")).toEqual(
            expect.objectContaining({
                red: 255,
                green: 0,
                blue: 0,
                alpha: 0,
            }),
        );
    });

    test("Array", () => {
        expect(parseColor([255, 0, 0])).toEqual(
            expect.objectContaining({
                red: 255,
                green: 0,
                blue: 0,
                alpha: 1,
            }),
        );
    });

    test("Array with alpha", () => {
        expect(parseColor([255, 0, 0, 0.5])).toEqual(
            expect.objectContaining({
                red: 255,
                green: 0,
                blue: 0,
                alpha: 0.5,
            }),
        );
    });

    test("RGB as string", () => {
        expect(parseColor("rgb(255, 0,0)")).toEqual(
            expect.objectContaining({
                red: 255,
                green: 0,
                blue: 0,
                alpha: 1,
            }),
        );
    });

    test("RGBA as string", () => {
        expect(parseColor("rgba(255, 0,0, .5)")).toEqual(
            expect.objectContaining({
                red: 255,
                green: 0,
                blue: 0,
                alpha: 0.5,
            }),
        );
    });

    test("HSL", () => {
        expect(
            parseColor({
                hue: 240,
                saturation: 1,
                lightness: 0.5,
                alpha: 0.5,
            }),
        ).toEqual(
            expect.objectContaining({
                red: 0,
                green: 0,
                blue: 255,
                alpha: 0.5,
            }),
        );
    });
});
