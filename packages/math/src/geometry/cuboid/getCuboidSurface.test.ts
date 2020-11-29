import { getCuboidSurface } from "./getCuboidSurface";

describe("getCuboidSurface", () => {
    test("Get surface area", () => {
        expect(getCuboidSurface(10, 20, 30)).toBe(2200);
    });
});
