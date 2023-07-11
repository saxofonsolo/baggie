import { multiplyColors } from "./multiplyColors";

describe("multiplyColors", () => {
    test("Multiply colors", () => {
        expect(multiplyColors("#ff0000", "#5A6262")).toEqual("#5a0000");
    });
});
