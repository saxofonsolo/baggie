import { getTriadicColorScheme } from "./getTriadicColorScheme";

describe("getTriadicColorScheme", () => {
    test("Get colors", () => {
        expect(getTriadicColorScheme("#ffff00")).toEqual([
            "#ffff00",
            "#00ffff",
            "#ff00ff",
        ]);
    });
});
