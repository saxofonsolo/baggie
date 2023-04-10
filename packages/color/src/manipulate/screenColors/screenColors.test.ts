import { screenColors } from "./screenColors";

describe("screenColors", () => {
    test("Screen colors", () => {
        expect(screenColors("#ff0000", "#00ff00")).toEqual("#ffff00");
    });
});
