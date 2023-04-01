import { mixColors } from "./mixColors";

describe("mixColors", () => {
    test("Mix colors", () => {
        expect(
            mixColors(
                { red: 255, green: 255, blue: 255 },
                { red: 90, green: 98, blue: 98 },
                0.5,
            ),
        ).toEqual(
            expect.objectContaining({
                alpha: 1,
                blue: 177,
                green: 177,
                red: 173,
            }),
        );
    });
});
