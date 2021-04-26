import { addNumbers } from "./addNumbers";

describe("addNumbers", () => {
    test("Add an array of multiple positive numbers", () => {
        expect(addNumbers([1, 2, 3, 4, 19, 12, 999, 0, 1])).toBe(1041);
    });

    test("Add an array of multiple negative numbers", () => {
        expect(addNumbers([-1, -2, -3, -4, -19, -12, -999, 0, -1])).toBe(-1041);
    });

    test("Add an array of multiple mixed numbers", () => {
        expect(addNumbers([-1, -2, -3, -4, 19, 12, 999, 0, 1])).toBe(1021);
    });

    test("Add an array of 1 number", () => {
        expect(addNumbers([19])).toBe(19);
    });

    test("Add an empty array", () => {
        expect(addNumbers([])).toBe(0);
    });
});
