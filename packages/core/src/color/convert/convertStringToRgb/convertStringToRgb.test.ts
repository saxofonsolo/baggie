import { convertStringToRgb } from "./convertStringToRgb";

describe("convertStringToRgb", () => {
    test("Red", () => {
        expect(convertStringToRgb("#ff0000")).toEqual(
            expect.objectContaining({
                alpha: 1,
                blue: 0,
                green: 0,
                red: 255,
            }),
        );
    });

    test("Lime", () => {
        expect(convertStringToRgb("#00ff00")).toEqual(
            expect.objectContaining({
                alpha: 1,
                blue: 0,
                green: 255,
                red: 0,
            }),
        );
    });

    test("Blue", () => {
        expect(convertStringToRgb("#0000ff")).toEqual(
            expect.objectContaining({
                alpha: 1,
                blue: 255,
                green: 0,
                red: 0,
            }),
        );
    });

    test("Alpha", () => {
        expect(convertStringToRgb("#0000ff00")).toEqual(
            expect.objectContaining({
                alpha: 0,
                blue: 255,
                green: 0,
                red: 0,
            }),
        );
    });
});
