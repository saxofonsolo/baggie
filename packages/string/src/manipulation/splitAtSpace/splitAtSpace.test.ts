import { splitAtSpace } from "./splitAtSpace";

describe("splitStringAtSpace", () => {
    test("High index", () => {
        expect(
            splitAtSpace(`This text has a single email@address.com.`, 80),
        ).toStrictEqual([`This text has a single email@address.com.`]);
    });

    test("Medium index", () => {
        expect(
            splitAtSpace(`This text has a single email@address.com.`, 10),
        ).toStrictEqual(["This text", "has a", "single", "email@address.com."]);
    });

    test("Low index", () => {
        expect(
            splitAtSpace(`This text has a single email@address.com.`, 0),
        ).toStrictEqual([
            "This",
            "text",
            "has",
            "a",
            "single",
            "email@address.com.",
        ]);
    });
});
