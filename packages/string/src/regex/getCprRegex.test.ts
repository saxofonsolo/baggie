import { getCprRegex } from "./getCprRegex";

describe("getCprRegex", () => {
    test("CPR with combined digits", () => {
        expect(getCprRegex().test("1706862134")).toBe(true);
    });

    test("CPR with divided digits", () => {
        expect(getCprRegex().test("170686-2134")).toBe(true);

        expect(getCprRegex().test("170686 2134")).toBe(true);
    });

    test("No CPR", () => {
        expect(getCprRegex().test("1170686-134")).toBe(false);
    });
});
