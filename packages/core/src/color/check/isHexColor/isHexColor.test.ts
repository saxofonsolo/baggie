import { isHexColor } from "./isHexColor";

describe("isHexColor", () => {
    test("Short", () => {
        expect(isHexColor("#fff")).toBe(true);
    });

    test("Short with alpha", () => {
        expect(isHexColor("#fff7")).toBe(true);
    });

    test("Long", () => {
        expect(isHexColor("#ff00bb")).toBe(true);
    });

    test("Long with alpha", () => {
        expect(isHexColor("#ff00bb7f")).toBe(true);
    });

    test("Too short", () => {
        expect(isHexColor("#ff")).toBe(false);
    });

    test("Too long", () => {
        expect(isHexColor("#ffbb110")).toBe(false);
    });

    test("Short invalid", () => {
        expect(isHexColor("#fr0")).toBe(false);
        expect(isHexColor("#fffg")).toBe(false);
    });

    test("Long invalid", () => {
        expect(isHexColor("#ff00gg")).toBe(false);
        expect(isHexColor("#ffffffgg")).toBe(false);
    });

    test("Not even a hex", () => {
        expect(isHexColor("ff0")).toBe(false);
        expect(isHexColor("ffffff00")).toBe(false);
    });
});
