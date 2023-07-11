import { getNewlineRegex } from "./getNewlineRegex";

describe("getNewlineRegex", () => {
    test("Replace new lines", () => {
        expect(
            "This is a text with a single  \r  line break.".replace(
                getNewlineRegex(),
                "-",
            ),
        ).toBe("This is a text with a single  -  line break.");

        expect(
            "This is a text with a single\n  line break.".replace(
                getNewlineRegex(),
                "-",
            ),
        ).toBe("This is a text with a single-  line break.");

        expect(
            "This is a text with a single  \r\nline break.".replace(
                getNewlineRegex(),
                "-",
            ),
        ).toBe("This is a text with a single  -line break.");

        expect(
            "This is a\r text with\n a single  \r\nline break.".replace(
                getNewlineRegex(),
                "-",
            ),
        ).toBe("This is a- text with- a single  -line break.");
    });

    test("Replace new lines and whitespace", () => {
        expect(
            "This is a text with a single  \r  line break.".replace(
                getNewlineRegex(true),
                "-",
            ),
        ).toBe("This is a text with a single-line break.");

        expect(
            "This is a text with a single\n  line break.".replace(
                getNewlineRegex(true),
                "-",
            ),
        ).toBe("This is a text with a single-line break.");

        expect(
            "This is a\r text with\n a single  \r\nline break.".replace(
                getNewlineRegex(true),
                "-",
            ),
        ).toBe("This is a-text with-a single-line break.");

        expect(
            `This is a
text`.replace(getNewlineRegex(true), "-"),
        ).toBe("This is a-text");
    });
});
