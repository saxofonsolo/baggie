import { stripTagsFromString } from "./stripTagsFromString";

describe("stripTagsFromString", () => {
    test("Strip tags from string", () => {
        expect(
            stripTagsFromString(
                `<p><b>Bold move.</b><br/>Paragraph.</p><!-- comment -->:)`
            )
        ).toBe("Bold move.Paragraph.:)");
    });

    test("Replace tags with space", () => {
        expect(
            stripTagsFromString(
                `<p><b>Bold move.</b><br/>Paragraph.</p><!-- comment -->:)`,
                " "
            )
        ).toBe(" Bold move. Paragraph. :)");
    });

    test("String with no tags", () => {
        expect(stripTagsFromString(`Bold move. Paragraph. :)`, " ")).toBe(
            "Bold move. Paragraph. :)"
        );
    });
});
