import { getDuration } from "./getDuration";

describe("getDuration", () => {
    test("Get the duration when speed is 10 and distance is 100", () => {
        expect(getDuration(10, 100)).toBe(10);
    });
});
