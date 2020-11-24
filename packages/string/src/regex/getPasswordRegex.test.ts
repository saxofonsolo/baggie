import { getPasswordRegex } from "./getPasswordRegex";

describe("getPasswordRegex", () => {
    test("Valid password", () => {
        expect(getPasswordRegex().test(`abcABC_1`)).toBe(true);

        expect(
            getPasswordRegex({
                minDigits: 2,
            }).test(`abcAB_11`)
        ).toBe(true);

        expect(
            getPasswordRegex({
                minSpecial: 2,
            }).test(`abcAB_~1`)
        ).toBe(true);

        expect(
            getPasswordRegex({
                allowUnicode: true,
            }).test(`æøåÆØÅ123_-`)
        ).toBe(true);

        expect(
            getPasswordRegex({
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
            }).test(`abcABC_~!012`)
        ).toBe(true);
    });

    test("Invalid password", () => {
        expect(
            getPasswordRegex({
                minDigits: 2,
            }).test(`abcABC_1`)
        ).toBe(false);

        expect(
            getPasswordRegex({
                minLength: 12,
            }).test(`abcABC_1`)
        ).toBe(false);

        expect(
            getPasswordRegex({
                minSpecial: 2,
            }).test(`abcABC_1`)
        ).toBe(false);

        expect(
            getPasswordRegex({
                minUppercase: 2,
            }).test(`abcdeA_1`)
        ).toBe(false);

        expect(
            getPasswordRegex({
                minLowercase: 2,
            }).test(`aABCDE_1`)
        ).toBe(false);

        expect(
            getPasswordRegex({
                maxDigits: 2,
            }).test(`abcABC_123`)
        ).toBe(false);

        expect(
            getPasswordRegex({
                maxLength: 12,
            }).test(`abcABC_123456`)
        ).toBe(false);

        expect(
            getPasswordRegex({
                maxSpecial: 2,
            }).test(`abcABC___1`)
        ).toBe(false);

        expect(
            getPasswordRegex({
                maxUppercase: 2,
            }).test(`abcABC_1`)
        ).toBe(false);

        expect(
            getPasswordRegex({
                maxLowercase: 2,
            }).test(`abcABC_1`)
        ).toBe(false);

        expect(
            getPasswordRegex({
                specialCharacters: "-'*",
            }).test(`abcABC_1`)
        ).toBe(false);

        expect(
            getPasswordRegex({
                forbiddenCharacters: "_",
            }).test(`abcABC_1`)
        ).toBe(false);

        expect(
            getPasswordRegex({
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
            }).test(`oabcABC_~!012`)
        ).toBe(false);
    });
});
