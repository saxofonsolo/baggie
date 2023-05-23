import { ColorComparison } from "./colorComparison";

describe("ColorComparison", () => {
    test("Red", () => {
        const colors = new ColorComparison([
            "#ff0000",
            "#ffff00",
            "#ff00ff",
            "#00ffff",
            "#00ff00",
        ]);

        colors.add("#ff8000");

        expect(colors.nearest("#ff9010")).toStrictEqual([
            "#ff8000",
            "#ff0000",
            "#ffff00",
            "#00ffff",
            "#00ff00",
            "#ff00ff",
        ]);

        expect(colors.farthest("#ff4040", 2)).toEqual(
            expect.arrayContaining(["#00ff00", "#00ffff"]),
        );

        colors.reset().add(["#ff0000", "#907ff0"]);

        expect(colors.nearest("#ff4040")).toStrictEqual(["#ff0000", "#907ff0"]);
    });
});
