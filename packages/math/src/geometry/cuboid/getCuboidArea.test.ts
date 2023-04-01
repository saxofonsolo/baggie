import { getCuboidArea } from "./getCuboidArea";

describe("getCuboidArea", () => {
    test("Get surface area", () => {
        expect(getCuboidArea(10, 20, 30)).toBe(2200);
    });
});
