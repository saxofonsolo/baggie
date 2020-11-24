import { getVimeoIdRegex } from "./getVimeoIdRegex";

describe("getVimeoIdRegex", () => {
    test("Get Vimeo ID from standard URL", () => {
        expect("https://vimeo.com/265700921".match(getVimeoIdRegex())).toEqual(
            expect.arrayContaining(["265700921"])
        );

        expect(
            "https://vimeo.com/12434588?autoplay=1".match(getVimeoIdRegex())
        ).toEqual(expect.arrayContaining(["12434588"]));
    });

    test("Get Vimeo ID from embed URL", () => {
        expect(
            "https://player.vimeo.com/video/12434588".match(getVimeoIdRegex())
        ).toEqual(expect.arrayContaining(["12434588"]));

        expect(
            "https://player.vimeo.com/video/12434588?autoplay=true&background=0".match(
                getVimeoIdRegex()
            )
        ).toEqual(expect.arrayContaining(["12434588"]));
    });

    test("Get undefined from URL for another site", () => {
        expect("https://google.com".match(getVimeoIdRegex())).toBe(null);
    });
});
