import { isColorBrighterThan } from "./isColorBrighterThan";

describe("isColorBrighterThan", () => {
    test("White vs black", () => {
        expect(
            isColorBrighterThan(
                { red: 255, green: 255, blue: 255 },
                { red: 0, green: 0, blue: 0 }
            )
        ).toBe(true);
    });

    test("Black vs white", () => {
        expect(
            isColorBrighterThan(
                { red: 0, green: 0, blue: 0 },
                { red: 255, green: 255, blue: 255 }
            )
        ).toBe(false);
    });

    test("Grey vs slightly darker grey", () => {
        expect(
            isColorBrighterThan(
                { red: 52, green: 52, blue: 52 },
                { red: 51, green: 51, blue: 51 }
            )
        ).toBe(true);
    });
});
