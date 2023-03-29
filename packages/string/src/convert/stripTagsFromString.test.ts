import { stripTagsFromString } from "./stripTagsFromString";

describe("stripTagsFromString", () => {
    test("Strip tags from string", () => {
        expect(
            stripTagsFromString(
                `<p><b>Bold move.</b><br/>Paragraph.</p><!-- comment -->:)`,
            ),
        ).toBe("Bold move. Paragraph. :)");
    });

    test("Replace tags with nothing", () => {
        expect(
            stripTagsFromString(
                `<p style="color: red"><b>Bold move.</b><br/>Paragraph.</p><!-- comment -->:)`,
                "",
            ),
        ).toBe("Bold move.Paragraph.:)");
    });

    test("Replace tags with space, not trimmed", () => {
        expect(
            stripTagsFromString(
                `<p style="color: red"><b>Bold move.</b><br/>Paragraph.</p><!-- comment -->:)<!-- comment 2 -->`,
                " ",
                false,
            ),
        ).toBe(" Bold move. Paragraph. :) ");
    });

    test("String with no tags", () => {
        expect(stripTagsFromString(`< Bold< move. Paragraph. /> :)`, " ")).toBe(
            "< Bold< move. Paragraph. /> :)",
        );
    });
});
