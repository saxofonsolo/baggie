import { normalizeHexColor } from "./normalizeHexColor";

describe("normalizeHexColor", () => {
    test("Short hex uppercase", () => {
        expect(normalizeHexColor("#FFF")).toEqual("#ffffff");
    });

    test("Short hex with alpha", () => {
        expect(normalizeHexColor("#fC07")).toEqual("#ffcc0077");
    });

    test("Long hex", () => {
        expect(normalizeHexColor("#FFFFFF")).toEqual("#ffffff");
    });

    test("Long hex with alpha", () => {
        expect(normalizeHexColor("#FFccFF75")).toEqual("#ffccff75");
    });

    test("Not hex", () => {
        expect(normalizeHexColor("lorem")).toEqual("lorem");
    });
});
