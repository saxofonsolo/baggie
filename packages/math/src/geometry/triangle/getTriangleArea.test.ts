import { getTriangleArea } from "./getTriangleArea";

describe("getTriangleArea", () => {
    test("Get surface area", () => {
        expect(getTriangleArea(10, 15, 20)).toBe(205.3959590644373);
    });
});
