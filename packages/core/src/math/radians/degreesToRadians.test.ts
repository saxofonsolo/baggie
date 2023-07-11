import { degreesToRadians } from "./degreesToRadians";

describe("degreesToRadians", () => {
    test("Convert degrees to radians", () => {
        expect(degreesToRadians(0)).toBe(0);
        expect(degreesToRadians(10)).toBe(0.17453292519943295);
        expect(degreesToRadians(180)).toBe(3.141592653589793);
        expect(degreesToRadians(360)).toBe(6.283185307179586);
        expect(degreesToRadians(1000)).toBe(17.453292519943293);
    });
});
