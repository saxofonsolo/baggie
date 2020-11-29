import { forEach } from "./forEach";

describe("forEach", () => {
    test("Loop through an array", () => {
        const data = ["a", 2, { c: true }, ["d"]];
        let result = "";

        forEach(data, (value, key) => {
            result += Array.isArray(value)
                ? value[0]
                : typeof value === "object"
                ? Object.keys(value)[0]
                : typeof value === "number"
                ? key
                : value;
        });

        expect(result).toBe(`a1cd`);
    });

    test("Loop through an object", () => {
        const data = {
            a: "A",
            b: "BB",
            c: "CCC",
        };
        let result = "";

        forEach(data, (value, key) => {
            result += key + value;
        });

        expect(result).toBe(`aAbBBcCCC`);
    });

    test("Loop through a DOM-collection", () => {
        document.body.innerHTML = `<div id="a"></div><div id="c"></div><div id="e"></div>`;
        const data = document.querySelectorAll("div");
        let result = "";

        forEach(data, (value, key) => {
            result += key + value.id;
        });

        expect(result).toBe(`0a1c2e`);
    });

    test("Loop through a Map", () => {
        const data = new Map();
        let result = "";

        data.set(["a", "b"], ["b", "c"]);
        data.set(["d", "e"], ["e", "f"]);
        data.set(["g", "h"], ["h", "i"]);

        forEach(data, (value, key) => {
            result += key[1] + value[0];
        });

        expect(result).toBe(`bbeehh`);
    });

    test("Loop through a Set", () => {
        const data = new Set();
        let result = "";

        data.add(["a", "b"]);
        data.add(["d", "e"]);
        data.add(["g", "h"]);

        forEach(data, (value, key) => {
            result += key + value[0];
        });

        expect(result).toBe(`0a1d2g`);

        data.clear();
        result = "";

        data.add("a");
        data.add("a");
        data.add("b");
        data.add("c");
        data.add("c");
        data.add("c");

        forEach(data, (value, key) => {
            result += key + value;
        });

        expect(result).toBe(`0a1b2c`);
    });

    test("Non-iterable", () => {
        const data = "hey";
        let result = "";

        forEach(data, (value, key) => {
            result += key + value;
        });

        expect(result).toBe(`0hey`);
    });
});
