import { getSlope } from "./getSlope";

describe("getSlope", () => {
    test("Get slope", () => {
        expect(getSlope({ x: 0, y: 0 }, { x: 20, y: 30 })).toBe(1.5);
    });

    test("No slope", () => {
        expect(getSlope({ x: 0, y: 0 }, { x: 0, y: 0 })).toBe(0);
    });
});
