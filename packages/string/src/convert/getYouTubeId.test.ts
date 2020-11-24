import { getYouTubeId } from "./getYouTubeId";

describe("getYouTubeId", () => {
    test("Get YouTube ID from standard URL", () => {
        expect(
            getYouTubeId("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        ).toBe("dQw4w9WgXcQ");

        expect(
            getYouTubeId(
                "https://www.youtube.com/watch?v=eDtGYygcPyw&ab_channel=Vincinator"
            )
        ).toBe("eDtGYygcPyw");
    });

    test("Get YouTube ID from short URL", () => {
        expect(getYouTubeId("https://youtu.be/N7-7HJCXx10")).toBe(
            "N7-7HJCXx10"
        );
    });

    test("Get YouTube ID from embed URL", () => {
        expect(getYouTubeId("https://www.youtube.com/embed/N7-7HJCXx10")).toBe(
            "N7-7HJCXx10"
        );
    });

    test("Get undefined from URL for another site", () => {
        expect(getYouTubeId("https://google.com")).toBe(undefined);
    });
});
