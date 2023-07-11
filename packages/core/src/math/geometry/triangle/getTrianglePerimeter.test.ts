import { getTrianglePerimeter } from "./getTrianglePerimeter";

describe("getTrianglePerimeter", () => {
    test("Get perimeter", () => {
        expect(getTrianglePerimeter(10, 15, 20)).toBe(45);
    });
});
