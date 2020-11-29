import { getSphereSurface } from "./getSphereSurface";

describe("getSphereSurface", () => {
    test("Get surface area", () => {
        expect(getSphereSurface(10)).toBe(1256.6370614359173);
    });
});
