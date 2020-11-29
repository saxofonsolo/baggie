import { getTriadicColorScheme } from "./getTriadicColorScheme";

describe("getTriadicColorScheme", () => {
    test("Get colors", () => {
        expect(
            getTriadicColorScheme({ red: 255, green: 255, blue: 0 })
        ).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    red: 255,
                    green: 255,
                    blue: 0,
                }),
                expect.objectContaining({
                    red: 0,
                    green: 255,
                    blue: 255,
                    alpha: 1,
                }),
                expect.objectContaining({
                    red: 255,
                    green: 0,
                    blue: 255,
                    alpha: 1,
                }),
            ])
        );
    });
});
