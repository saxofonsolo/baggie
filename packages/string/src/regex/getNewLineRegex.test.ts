import { getNewLineRegex } from "./getNewLineRegex";

describe("getNewLineRegex", () => {
    test("Replace new lines", () => {
        expect(
            "This is a text with a single  \r  line break.".replace(
                getNewLineRegex(),
                "-",
            ),
        ).toBe("This is a text with a single  -  line break.");

        expect(
            "This is a text with a single\n  line break.".replace(
                getNewLineRegex(),
                "-",
            ),
        ).toBe("This is a text with a single-  line break.");

        expect(
            "This is a text with a single  \r\nline break.".replace(
                getNewLineRegex(),
                "-",
            ),
        ).toBe("This is a text with a single  -line break.");

        expect(
            "This is a\r text with\n a single  \r\nline break.".replace(
                getNewLineRegex(),
                "-",
            ),
        ).toBe("This is a- text with- a single  -line break.");
    });

    test("Replace new lines and whitespace", () => {
        expect(
            "This is a text with a single  \r  line break.".replace(
                getNewLineRegex(true),
                "-",
            ),
        ).toBe("This is a text with a single-line break.");

        expect(
            "This is a text with a single\n  line break.".replace(
                getNewLineRegex(true),
                "-",
            ),
        ).toBe("This is a text with a single-line break.");

        expect(
            "This is a\r text with\n a single  \r\nline break.".replace(
                getNewLineRegex(true),
                "-",
            ),
        ).toBe("This is a-text with-a single-line break.");

        expect(
            `This is a
text`.replace(getNewLineRegex(true), "-"),
        ).toBe("This is a-text");
    });
});
