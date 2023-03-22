import { capitalizeFirstLetter } from "./capitalizeFirstLetter";

describe("capitalizeFirstLetter", () => {
    test("Capitalize first letter", () => {
        expect(capitalizeFirstLetter(`this is a text`)).toBe(`This is a text`);
        expect(capitalizeFirstLetter(`This IS A Text`)).toBe(`This IS A Text`);
    });

    test("Lowercase everything else", () => {
        expect(
            capitalizeFirstLetter(`this is a text`, {
                lowerCaseEverythingElse: true,
            }),
        ).toBe(`This is a text`);
        expect(
            capitalizeFirstLetter(`This IS A Text`, {
                lowerCaseEverythingElse: true,
            }),
        ).toBe(`This is a text`);
    });

    test("Using unicode characters", () => {
        expect(
            capitalizeFirstLetter(`æøå`, { lowerCaseEverythingElse: true }),
        ).toBe(`Æøå`);
        expect(
            capitalizeFirstLetter(`ÆØÅ`, { lowerCaseEverythingElse: true }),
        ).toBe(`Æøå`);
        expect(
            capitalizeFirstLetter(`DINÇ`, { lowerCaseEverythingElse: true }),
        ).toBe(`Dinç`);
        expect(
            capitalizeFirstLetter(`DINÇ`, {
                locale: "tr-TR",
                lowerCaseEverythingElse: true,
            }),
        ).toBe(`Dınç`);
        expect(capitalizeFirstLetter(`inç`, { locale: "tr-TR" })).toBe(`İnç`);
        expect(capitalizeFirstLetter(`çi`, { locale: "tr-TR" })).toBe(`Çi`);
    });
});
