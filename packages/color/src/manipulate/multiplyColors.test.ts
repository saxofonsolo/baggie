import { multiplyColors } from "./multiplyColors";

describe("multiplyColors", () => {
    test("Multiply colors", () => {
        expect(
            multiplyColors(
                { red: 255, green: 255, blue: 255 },
                { red: 90, green: 98, blue: 98 }
            )
        ).toEqual(
            expect.objectContaining({
                alpha: 1,
                blue: 98,
                green: 98,
                red: 90,
            })
        );
    });
});
