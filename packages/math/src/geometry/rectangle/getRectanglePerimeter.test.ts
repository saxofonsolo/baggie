import { getRectanglePerimeter } from "./getRectanglePerimeter";

describe("getRectanglePerimeter", () => {
    test("Get perimeter", () => {
        expect(getRectanglePerimeter(10, 20)).toBe(60);
    });
});
