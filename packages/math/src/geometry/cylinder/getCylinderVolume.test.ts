import { getCylinderVolume } from "./getCylinderVolume";

describe("getCylinderVolume", () => {
    test("Get volume", () => {
        expect(getCylinderVolume(10, 20)).toBe(6283.185307179587);
    });
});
