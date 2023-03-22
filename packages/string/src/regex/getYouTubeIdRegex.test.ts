import { getYouTubeIdRegex } from "./getYouTubeIdRegex";

describe("getYouTubeIdRegex", () => {
    test("Get YouTube ID from standard URL", () => {
        expect(
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ".match(
                getYouTubeIdRegex(),
            ),
        ).toEqual(expect.arrayContaining(["dQw4w9WgXcQ"]));

        expect(
            "https://www.youtube.com/watch?v=eDtGYygcPyw&ab_channel=Vincinator".match(
                getYouTubeIdRegex(),
            ),
        ).toEqual(expect.arrayContaining(["eDtGYygcPyw"]));
    });

    test("Get YouTube ID from short URL", () => {
        expect(
            "https://youtu.be/N7-7HJCXx10".match(getYouTubeIdRegex()),
        ).toEqual(expect.arrayContaining(["N7-7HJCXx10"]));
    });

    test("Get YouTube ID from embed URL", () => {
        expect(
            "https://www.youtube.com/embed/N7-7HJCXx10".match(
                getYouTubeIdRegex(),
            ),
        ).toEqual(expect.arrayContaining(["N7-7HJCXx10"]));

        expect(
            "https://www.youtube.com/embed/N7-7HJCXx10?autoplay=1".match(
                getYouTubeIdRegex(),
            ),
        ).toEqual(expect.arrayContaining(["N7-7HJCXx10"]));
    });

    test("Get undefined from URL for another site", () => {
        expect("https://google.com".match(getYouTubeIdRegex())).toBe(null);
    });
});
