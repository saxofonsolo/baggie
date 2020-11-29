import { getConeVolume } from "./getConeVolume";

describe("getConeVolume", () => {
    test("Get volume", () => {
        expect(getConeVolume(10, 20)).toBe(2094.3951023931954);
    });
});
