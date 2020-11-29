import { getCircleCircumference } from "./getCircleCircumference";

describe("getCircleCircumference", () => {
    test("Get circumference", () => {
        expect(getCircleCircumference(100)).toBe(628.3185307179587);
    });
});
