import { substringHtmlEntitySafe } from "./substringHtmlEntitySafe";

describe("substringHtmlEntitySafe", () => {
    test("Use on basic string", () => {
        expect(
            substringHtmlEntitySafe("lorem ipsum dolor sit amet", 1, 20),
        ).toBe("orem ipsum dolor si");
        expect(
            substringHtmlEntitySafe("lorem ipsum dolor sit amet", 0, 10),
        ).toBe("lorem ipsu");
        expect(substringHtmlEntitySafe("lorem ipsum dolor sit amet", 0)).toBe(
            "lorem ipsum dolor sit amet",
        );
    });

    test("Use on string with HTML entities", () => {
        expect(
            substringHtmlEntitySafe(
                "lorem &nbsp; ipsum &#100;dolor sit&sup2;amet",
                0,
                20,
            ),
        ).toBe("lorem &nbsp; ipsum &#100;dolor");
        expect(
            substringHtmlEntitySafe(
                "lorem &nbsp; ipsum &#100;dolor sit&sup2;amet",
                6,
            ),
        ).toBe("&nbsp; ipsum &#100;dolor sit&sup2;amet");
        expect(
            substringHtmlEntitySafe(
                "lorem &nbsp; ipsum &#100;dolor sit&sup2;amet",
                8,
            ),
        ).toBe("ipsum &#100;dolor sit&sup2;amet");
    });

    test("Negative end index", () => {
        expect(
            substringHtmlEntitySafe(
                "lorem &nbsp; ipsum &#100;dolor sit&sup2;amet",
                0,
                -2,
            ),
        ).toBe("lorem &nbsp; ipsum &#100;dolor sit&sup2;am");
        expect(
            substringHtmlEntitySafe(
                "lorem &nbsp; ipsum &#100;dolor sit&sup2;amet",
                7,
                -20,
            ),
        ).toBe(" i");
    });
});
