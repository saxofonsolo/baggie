import { getRectangleArea } from "./getRectangleArea";

describe("getRectangleArea", () => {
    test("Get surface area", () => {
        expect(getRectangleArea(10, 20)).toBe(200);
    });
});
