import { getSphereVolume } from "./getSphereVolume";

describe("getSphereVolume", () => {
    test("Get volume", () => {
        expect(getSphereVolume(10)).toBe(4188.790204786391);
    });
});
