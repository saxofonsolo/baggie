import { screenColors } from "./screenColors";

describe("screenColors", () => {
    test("Screen colors", () => {
        expect(
            screenColors(
                { red: 255, green: 0, blue: 0 },
                { red: 0, green: 255, blue: 0 }
            )
        ).toEqual(
            expect.objectContaining({
                alpha: 1,
                blue: 0,
                green: 255,
                red: 255,
            })
        );
    });
});
