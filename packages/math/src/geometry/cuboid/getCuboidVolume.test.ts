import { getCuboidVolume } from "./getCuboidVolume";

describe("getCuboidVolume", () => {
    test("Get volume", () => {
        expect(getCuboidVolume(10, 20, 30)).toBe(6000);
    });
});
