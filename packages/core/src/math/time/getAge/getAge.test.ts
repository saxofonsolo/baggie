import { getAge } from "./getAge";

describe("getAge", () => {
    test("With same date", () => {
        const start = new Date("1986-06-17");
        const end = new Date("2023-06-17");
        expect(getAge(start, end)).toEqual(37);
    });

    test("With same date but not time", () => {
        const start = new Date("1986-06-17T23:00:00");
        const end = new Date("2023-06-17T00:00:00");
        expect(getAge(start, end)).toEqual(37);
    });

    test("With different dates", () => {
        const start = new Date("1986-06-17");
        const end = new Date("2023-06-16");
        expect(getAge(start, end)).toEqual(36);
    });
});
