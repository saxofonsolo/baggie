import { truncNumber } from "./truncNumber";

describe("truncNumber", () => {
    test("Positive number", () => {
        expect(truncNumber(13.37)).toBe(13);
    });

    test("Negative number", () => {
        expect(truncNumber(-1.123)).toBe(-1);
    });

    test("Force using polyfill", () => {
        // @ts-ignore
        Math.trunc = undefined;

        expect(truncNumber(13.37)).toBe(13);
        expect(truncNumber(-1.123)).toBe(-1);
    });
});
