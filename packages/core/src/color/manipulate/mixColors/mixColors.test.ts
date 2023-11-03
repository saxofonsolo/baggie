import { mixColors } from "./mixColors";

describe("mixColors", () => {
    test("Mix colors", () => {
        expect(mixColors("#ff0000", "#5A6262", 0.5)).toEqual("#ad3131");
        expect(mixColors("#ff0000", "#5A6262", 10)).toEqual("#ff0000");
        expect(mixColors("#ff0000", "#5A6262", -10)).toEqual("#5a6262");
    });
});
