import { getTriangleSurface } from "./getTriangleSurface";

describe("getTriangleSurface", () => {
    test("Get surface area", () => {
        expect(getTriangleSurface(10, 15, 20)).toBe(205.3959590644373);
    });
});
