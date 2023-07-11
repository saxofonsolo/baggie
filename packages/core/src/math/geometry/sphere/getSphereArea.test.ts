import { getSphereArea } from "./getSphereArea";

describe("getSphereArea", () => {
    test("Get surface area", () => {
        expect(getSphereArea(10)).toBe(1256.6370614359173);
    });
});
