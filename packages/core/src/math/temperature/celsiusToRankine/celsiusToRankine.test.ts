import { celsiusToRankine } from "./celsiusToRankine";

describe("celsiusToRankine", () => {
    test("Convert Celsius to Rankine", () => {
        expect(celsiusToRankine(0)).toBe(491.67);
        expect(celsiusToRankine(100)).toBe(671.6700000000001);
        expect(celsiusToRankine(200)).toBe(851.6700000000001);
        expect(celsiusToRankine(300)).toBe(1031.67);
    });
});
