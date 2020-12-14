import { isNumberRound } from "./isNumberRound";

describe("isNumberRound", () => {
    test("True", () => {
        expect(isNumberRound(13.37, 2)).toBe(true);
        expect(isNumberRound(13.3, 2)).toBe(true);
        expect(isNumberRound(13, 2)).toBe(true);
    });

    test("False", () => {
        expect(isNumberRound(13.375, 2)).toBe(false);
    });
});
