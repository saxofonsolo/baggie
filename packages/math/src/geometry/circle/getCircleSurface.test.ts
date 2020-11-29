import { getCircleSurface } from "./getCircleSurface";

describe("getCircleSurface", () => {
    test("Get surface area", () => {
        expect(getCircleSurface(10)).toBe(314.1592653589793);
    });
});
