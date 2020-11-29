import { getTetradicColorScheme } from "./getTetradicColorScheme";

describe("getTetradicColorScheme", () => {
    test("Get colors", () => {
        expect(
            getTetradicColorScheme({ red: 255, green: 255, blue: 0 })
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
                    blue: 128,
                    alpha: 1,
                }),
                expect.objectContaining({
                    red: 0,
                    green: 0,
                    blue: 255,
                    alpha: 1,
                }),
                expect.objectContaining({
                    red: 255,
                    green: 0,
                    blue: 128,
                    alpha: 1,
                }),
            ])
        );
    });
});
