import { getConeSurface } from "./getConeSurface";

describe("getConeSurface", () => {
    test("Get surface area", () => {
        expect(getConeSurface(10, 20)).toBe(942.4777960769379);
    });

    test("Get surface area (bottom excluded)", () => {
        expect(getConeSurface(10, 20, true)).toBe(628.3185307179587);
    });
});
