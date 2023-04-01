import { getCircleArea } from "./getCircleArea";

describe("getCircleArea", () => {
    test("Get surface area", () => {
        expect(getCircleArea(10)).toBe(314.1592653589793);
    });
});
