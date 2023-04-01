import { getTagsRegex } from "./getTagsRegex";

describe("getTagsRegex", () => {
    test("Get tags", () => {
        expect(
            `<b class="yolo">bold</b><i>italic</i><u>underline</u>`.match(
                getTagsRegex(),
            ),
        ).toEqual(
            expect.arrayContaining([
                `<b class="yolo">`,
                "</b>",
                "<i>",
                "</i>",
                "<u>",
                "</u>",
            ]),
        );
    });

    test("Get tags (group sequential tags)", () => {
        expect(
            `<b>bold</b><i class="yolo">italic</i><u>underline</u>`.match(
                getTagsRegex(true),
            ),
        ).toEqual(
            expect.arrayContaining([
                "<b>",
                `</b><i class="yolo">`,
                "</i><u>",
                "</u>",
            ]),
        );
    });
});
