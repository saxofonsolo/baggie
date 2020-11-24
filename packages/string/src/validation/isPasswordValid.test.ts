import { isPasswordValid } from "./isPasswordValid";

describe("isPasswordValid", () => {
    test("Valid password", () => {
        expect(isPasswordValid(`abcABC_1`)).toBe(true);

        expect(
            isPasswordValid(`abcAB_11`, {
                minDigits: 2,
            })
        ).toBe(true);

        expect(
            isPasswordValid(`abcAB_~1`, {
                minSpecial: 2,
            })
        ).toBe(true);

        expect(
            isPasswordValid(`æøåÆØÅ123_-`, {
                allowUnicode: true,
            })
        ).toBe(true);

        expect(
            isPasswordValid(`abcABC_~!012`, {
                minLength: 12,
                maxLength: 12,
                minDigits: 3,
                maxDigits: 3,
                minSpecial: 3,
                maxSpecial: 3,
                minLowercase: 3,
                maxLowercase: 3,
                minUppercase: 3,
                maxUppercase: 3,
            })
        ).toBe(true);
    });

    test("Invalid password", () => {
        expect(
            isPasswordValid(`abcABC_1`, {
                minDigits: 2,
            })
        ).toBe(false);

        expect(
            isPasswordValid(`abcABC_1`, {
                minLength: 12,
            })
        ).toBe(false);

        expect(
            isPasswordValid(`abcABC_1`, {
                minSpecial: 2,
            })
        ).toBe(false);

        expect(
            isPasswordValid(`abcdeA_1`, {
                minUppercase: 2,
            })
        ).toBe(false);

        expect(
            isPasswordValid(`aABCDE_1`, {
                minLowercase: 2,
            })
        ).toBe(false);

        expect(
            isPasswordValid(`abcABC_123`, {
                maxDigits: 2,
            })
        ).toBe(false);

        expect(
            isPasswordValid(`abcABC_123456`, {
                maxLength: 12,
            })
        ).toBe(false);

        expect(
            isPasswordValid(`abcABC___1`, {
                maxSpecial: 2,
            })
        ).toBe(false);

        expect(
            isPasswordValid(`abcABC_1`, {
                maxUppercase: 2,
            })
        ).toBe(false);

        expect(
            isPasswordValid(`abcABC_1`, {
                maxLowercase: 2,
            })
        ).toBe(false);

        expect(
            isPasswordValid(`abcABC_1`, {
                specialCharacters: "-'*",
            })
        ).toBe(false);

        expect(
            isPasswordValid(`abcABC_1`, {
                forbiddenCharacters: "_",
            })
        ).toBe(false);

        expect(
            isPasswordValid(`oabcABC_~!012`, {
                minLength: 12,
                maxLength: 12,
                minDigits: 3,
                maxDigits: 3,
                minSpecial: 3,
                maxSpecial: 3,
                minLowercase: 3,
                maxLowercase: 3,
                minUppercase: 3,
                maxUppercase: 3,
            })
        ).toBe(false);
    });
});
