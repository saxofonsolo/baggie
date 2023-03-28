import { uppercaseFirstLetter } from "./uppercaseFirstLetter";

describe("uppercaseFirstLetter", () => {
    test("Capitalize first letter", () => {
        expect(uppercaseFirstLetter(`this is a text`)).toBe(`This is a text`);
        expect(uppercaseFirstLetter(`This IS A Text`)).toBe(`This IS A Text`);
    });

    test("Lowercase everything else", () => {
        expect(
            uppercaseFirstLetter(`this is a text`, {
                lowercaseRest: true,
            }),
        ).toBe(`This is a text`);
        expect(
            uppercaseFirstLetter(`This IS A Text`, {
                lowercaseRest: true,
            }),
        ).toBe(`This is a text`);
    });

    test("Using unicode characters", () => {
        expect(uppercaseFirstLetter(`æøå`, { lowercaseRest: true })).toBe(
            `Æøå`,
        );
        expect(uppercaseFirstLetter(`ÆØÅ`, { lowercaseRest: true })).toBe(
            `Æøå`,
        );
        expect(uppercaseFirstLetter(`DINÇ`, { lowercaseRest: true })).toBe(
            `Dinç`,
        );
        expect(
            uppercaseFirstLetter(`DINÇ`, {
                locale: "tr-TR",
                lowercaseRest: true,
            }),
        ).toBe(`Dınç`);
        expect(uppercaseFirstLetter(`inç`, { locale: "tr-TR" })).toBe(`İnç`);
        expect(uppercaseFirstLetter(`çi`, { locale: "tr-TR" })).toBe(`Çi`);
    });
});
