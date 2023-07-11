import { getCircleSegmentArea } from "./getCircleSegmentArea";

describe("getCircleSegmentArea", () => {
    test("Get surface area", () => {
        expect(getCircleSegmentArea(10, 20)).toBe(314.1592653589793);
        expect(getCircleSegmentArea(10, 10)).toBe(157.07963267948966);
        expect(getCircleSegmentArea(10, 0)).toBe(0);
    });
});
