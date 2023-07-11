import { substringHtmlSafe } from "./substringHtmlSafe";

describe("substringHtmlEntitySafe", () => {
    test("Use on basic string", () => {
        expect(substringHtmlSafe("lorem ipsum dolor sit amet", 1, 20)).toBe(
            "orem ipsum dolor si",
        );
        expect(substringHtmlSafe("lorem ipsum dolor sit amet", 0, 10)).toBe(
            "lorem ipsu",
        );
        expect(substringHtmlSafe("lorem ipsum dolor sit amet", 0)).toBe(
            "lorem ipsum dolor sit amet",
        );
    });

    test("Use on string with HTML", () => {
        expect(
            substringHtmlSafe(
                "lorem &nbsp; ipsum &#58;dolor sit&sup2;amet",
                0,
                20,
            ),
        ).toBe("lorem &nbsp; ipsum :dolor");
        expect(
            substringHtmlSafe(
                "<b>lorem</b> &nbsp; <i>ipsum</i> &#58;dolor sit&sup2;amet",
                6,
            ),
        ).toBe("&nbsp; <i>ipsum</i> :dolor sit²amet");
        expect(
            substringHtmlSafe(
                `<div style="color: red;">lorem &nbsp; <b class="big">ipsum &#58;dolor</b></div> sit&sup2;amet`,
                8,
                18,
            ),
        ).toBe(`<b class="big">ipsum :dol</b>`);
    });

    test("Negative end index", () => {
        expect(
            substringHtmlSafe(
                "lorem &nbsp; ipsum &#58;dolor sit&sup2;amet",
                0,
                -3,
            ),
        ).toBe("lorem &nbsp; ipsum :dolor sit²a");
        expect(
            substringHtmlSafe(
                "lorem &nbsp; ipsum &#100;dolor sit&sup2;amet",
                7,
                -20,
            ),
        ).toBe(" i");
    });
});
