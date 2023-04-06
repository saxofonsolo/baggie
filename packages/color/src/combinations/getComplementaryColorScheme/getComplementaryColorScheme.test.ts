import { getComplementaryColorScheme } from "./getComplementaryColorScheme";

describe("getComplementaryColorScheme", () => {
    test("Get colors", () => {
        expect(getComplementaryColorScheme("#ffff00")).toEqual(
            expect.arrayContaining([
                expect.stringMatching(/^#ffff00$/),
                expect.stringMatching(/^#0000ff$/),
            ]),
        );
    });
});
