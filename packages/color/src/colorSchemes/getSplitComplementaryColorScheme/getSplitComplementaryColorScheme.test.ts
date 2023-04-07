import { getSplitComplementaryColorScheme } from "./getSplitComplementaryColorScheme";

describe("getSplitComplementaryColorScheme", () => {
    test("Get colors", () => {
        expect(
            getSplitComplementaryColorScheme({ red: 255, green: 255, blue: 0 }),
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
                    blue: 51,
                    alpha: 1,
                }),
                expect.objectContaining({
                    red: 153,
                    green: 0,
                    blue: 255,
                    alpha: 1,
                }),
            ]),
        );
    });
});
