import { isDateValid } from "./isDateValid";

describe("isDateValid", () => {
    test("Date as string", () => {
        expect(isDateValid("31-01-2020")).toBe(true);

        expect(isDateValid("31012020")).toBe(true);

        expect(isDateValid("day: 31, month: 01, year: 2020")).toBe(true);
    });

    test("Date as string (month before day)", () => {
        expect(
            isDateValid("01-31-2020", {
                monthBeforeDay: true,
            }),
        ).toBe(true);

        expect(
            isDateValid("01312020", {
                monthBeforeDay: true,
            }),
        ).toBe(true);

        expect(
            isDateValid("month: 01, day: 31, year: 2020", {
                monthBeforeDay: true,
            }),
        ).toBe(true);
    });

    test("Date as string (zero based month)", () => {
        expect(
            isDateValid("00-31-2020", {
                monthBeforeDay: true,
                zeroBasedMonth: true,
            }),
        ).toBe(true);

        expect(
            isDateValid("00312020", {
                monthBeforeDay: true,
                zeroBasedMonth: true,
            }),
        ).toBe(true);

        expect(
            isDateValid("month: 0, day: 31, year: 2020", {
                monthBeforeDay: true,
                zeroBasedMonth: true,
            }),
        ).toBe(true);
    });

    test("Date as object", () => {
        expect(
            isDateValid({
                day: 31,
                month: 1,
                year: 2020,
            }),
        ).toBe(true);

        expect(
            isDateValid({
                day: "31",
                month: "01",
                year: "2020",
            }),
        ).toBe(true);

        expect(
            isDateValid(
                {
                    day: 31,
                    month: "00",
                    year: 2020,
                },
                {
                    zeroBasedMonth: true,
                },
            ),
        ).toBe(true);
    });
});
