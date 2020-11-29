import { radiansToDegrees } from "./radiansToDegrees";

describe("radiansToDegrees", () => {
    test("Convert radians to degrees", () => {
        expect(radiansToDegrees(0)).toBe(0);
        expect(radiansToDegrees(0.17453292519943295)).toBe(10);
        expect(radiansToDegrees(3.141592653589793)).toBe(180);
        expect(radiansToDegrees(6.283185307179586)).toBe(360);
        expect(radiansToDegrees(17.453292519943293)).toBe(999.9999999999999);
    });
});
