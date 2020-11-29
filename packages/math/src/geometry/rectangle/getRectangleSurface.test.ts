import { getRectangleSurface } from "./getRectangleSurface";

describe("getRectangleSurface", () => {
    test("Get surface area", () => {
        expect(getRectangleSurface(10, 20)).toBe(200);
    });
});
