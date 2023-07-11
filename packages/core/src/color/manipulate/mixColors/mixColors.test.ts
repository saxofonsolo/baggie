import { mixColors } from "./mixColors";

describe("mixColors", () => {
    test("Mix colors", () => {
        expect(mixColors("#ff0000", "#5A6262", 0.5)).toEqual("#ad3131");
    });
});
