import { getAnalogousColorScheme } from "./getAnalogousColorScheme";

describe("getAnalogousColorScheme", () => {
    test("Get 3 colors total", () => {
        expect(getAnalogousColorScheme("#ffff00", 3)).toEqual(
            expect.arrayContaining([
                expect.stringMatching(/^#ffff00$/),
                expect.stringMatching(/^#80ff00$/),
                expect.stringMatching(/^#00ff00$/),
            ]),
        );
    });

    test("Get 2 colors total", () => {
        expect(getAnalogousColorScheme("#ffff00", 2, 24)).toEqual(
            expect.arrayContaining([
                expect.stringMatching(/^#ffff00$/),
                expect.stringMatching(/^#bfff00$/),
            ]),
        );
    });
});
