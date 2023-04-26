import { clamp } from "./clamp";

describe("clamp", () => {
    test("Use clamp with number in range", () => {
        expect(clamp(0, -1, 1)).toBe(0);
    });

    test("Use clamp with number lower than minimum", () => {
        expect(clamp(-10, -1, 1)).toBe(-1);
    });

    test("Use clamp with number higher than maximum", () => {
        expect(clamp(10, -1, 1)).toBe(1);
    });

    test("Use clamp with min and max values switched", () => {
        expect(clamp(-10, 1, -1)).toBe(-1);
    });
});
