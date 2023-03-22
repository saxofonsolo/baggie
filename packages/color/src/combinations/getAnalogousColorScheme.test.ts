import { getAnalogousColorScheme } from "./getAnalogousColorScheme";

describe("getAnalogousColorScheme", () => {
    test("Get 3 colors total", () => {
        expect(
            getAnalogousColorScheme({ red: 255, green: 255, blue: 0 }, 3),
        ).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    red: 255,
                    green: 255,
                    blue: 0,
                }),
                expect.objectContaining({
                    red: 128,
                    green: 255,
                    blue: 0,
                    alpha: 1,
                }),
                expect.objectContaining({
                    red: 0,
                    green: 255,
                    blue: 0,
                    alpha: 1,
                }),
            ]),
        );
    });

    test("Get 2 colors total", () => {
        expect(
            getAnalogousColorScheme({ red: 255, green: 255, blue: 0 }, 2, 24),
        ).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    red: 255,
                    green: 255,
                    blue: 0,
                }),
                expect.objectContaining({
                    red: 191,
                    green: 255,
                    blue: 0,
                    alpha: 1,
                }),
            ]),
        );
    });
});
