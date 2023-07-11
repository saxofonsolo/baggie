import { getCylinderArea } from "./getCylinderArea";

describe("getCylinderArea", () => {
    test("Get surface area", () => {
        expect(getCylinderArea(10, 20)).toBe(1884.9555921538758);
    });

    test("Get surface area (ends excluded)", () => {
        expect(getCylinderArea(10, 20, true)).toBe(1256.6370614359173);
    });
});
