import { ColorComparison } from "./colorComparison";

describe("ColorComparison", () => {
    test("Red", () => {
        const colors = new ColorComparison([
            {
                red: 255,
                green: 0,
                blue: 0,
            },
            {
                red: 255,
                green: 255,
                blue: 0,
            },
            {
                red: 255,
                green: 0,
                blue: 255,
            },
            {
                red: 0,
                green: 255,
                blue: 255,
            },
            {
                red: 0,
                green: 255,
                blue: 0,
            },
        ]);

        colors.add({
            red: 255,
            green: 50,
            blue: 0,
        });

        expect(
            colors.nearest({
                red: 255,
                green: 60,
                blue: 10,
            }),
        ).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    red: 255,
                    green: 50,
                    blue: 0,
                }),
            ]),
        );

        expect(
            colors.farthest(
                {
                    red: 255,
                    green: 50,
                    blue: 50,
                },
                2,
            ),
        ).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    red: 0,
                    green: 255,
                    blue: 0,
                }),
                expect.objectContaining({
                    red: 0,
                    green: 255,
                    blue: 255,
                }),
            ]),
        );

        colors.reset().add([
            {
                red: 255,
                green: 50,
                blue: 50,
            },
            {
                red: 0,
                green: 255,
                blue: 0,
            },
        ]);

        expect(
            colors.nearest({
                red: 255,
                green: 0,
                blue: 0,
            }),
        ).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    red: 255,
                    green: 50,
                    blue: 50,
                }),
            ]),
        );
    });
});
