import { keepOutsideRange } from "./keepOutsideRange";

describe("keepOutsideRange", () => {
    test("Use with number in range", () => {
        expect(keepOutsideRange(5, 0, 10, true)).toBe(0);
        expect(keepOutsideRange(4.999, 0, 10)).toBe(0);
        expect(keepOutsideRange(5, 0, 10)).toBe(10);
        expect(keepOutsideRange(5.001, 0, 10, true)).toBe(10);
    });

    test("Use with number not in range", () => {
        expect(keepOutsideRange(-5, 0, 10)).toBe(-5);
        expect(keepOutsideRange(500, 0, 10, true)).toBe(500);
    });
});
