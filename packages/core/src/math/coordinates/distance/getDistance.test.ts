import { getDistance } from "./getDistance";

describe("getDistance", () => {
    test("Get distance", () => {
        expect(getDistance({ x: 10, y: 30 }, { x: 20, y: 30 })).toBe(10);
    });
});
