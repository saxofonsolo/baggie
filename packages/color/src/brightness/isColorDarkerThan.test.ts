import { isColorDarkerThan } from "./isColorDarkerThan";

describe("isColorDarkerThan", () => {
    test("White vs black", () => {
        expect(
            isColorDarkerThan(
                { red: 255, green: 255, blue: 255 },
                { red: 0, green: 0, blue: 0 }
            )
        ).toBe(false);
    });

    test("Black vs white", () => {
        expect(
            isColorDarkerThan(
                { red: 0, green: 0, blue: 0 },
                { red: 255, green: 255, blue: 255 }
            )
        ).toBe(true);
    });

    test("Grey vs slightly darker grey", () => {
        expect(
            isColorDarkerThan(
                { red: 50, green: 50, blue: 50 },
                { red: 51, green: 51, blue: 51 }
            )
        ).toBe(true);
    });
});
