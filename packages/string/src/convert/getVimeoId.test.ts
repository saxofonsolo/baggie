import { getVimeoId } from "./getVimeoId";

describe("getVimeoId", () => {
    test("Get Vimeo ID from standard URL", () => {
        expect(getVimeoId("https://vimeo.com/265700921")).toBe("265700921");

        expect(getVimeoId("https://vimeo.com/12434588?autoplay=1")).toBe(
            "12434588"
        );
    });

    test("Get Vimeo ID from embed URL", () => {
        expect(getVimeoId("https://player.vimeo.com/video/12434588")).toBe(
            "12434588"
        );

        expect(
            getVimeoId(
                "https://player.vimeo.com/video/12434588?autoplay=true&background=0"
            )
        ).toBe("12434588");
    });

    test("Get undefined from URL for another site", () => {
        expect(getVimeoId("https://google.com")).toBe(undefined);
    });
});
