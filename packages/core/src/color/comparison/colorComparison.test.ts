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

        expect(colors.compare("#ff9010")).toStrictEqual([
            "#ff8000",
            "#ff0000",
            "#ffff00",
            "#00ffff",
            "#00ff00",
            "#ff00ff",
        ]);

        colors.reset().add(["#ff0000", "#907ff0"]);

        expect(colors.compare("#ff4040")).toStrictEqual(["#ff0000", "#907ff0"]);
    });
});
