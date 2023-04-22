import { convertToDate } from "./convertToDate";

jest.useFakeTimers().setSystemTime(new Date("2022-01-31").getTime());

describe("convertToDate", () => {
    test("String to a date", () => {
        expect((convertToDate("17-06-1986") as Date).getTime()).toBe(
            519350400000,
        );

        expect((convertToDate("31012020") as Date).getTime()).toBe(
            1580428800000,
        );

        expect(
            (convertToDate("day: 31, month: 01, year: 2020") as Date).getTime(),
        ).toBe(1580428800000);
    });

    test("String to a date (month before day)", () => {
        expect(
            (
                convertToDate("01-31-2020", {
                    monthBeforeDay: true,
                }) as Date
            ).getTime(),
        ).toBe(1580428800000);

        expect(
            (
                convertToDate("01312020", {
                    monthBeforeDay: true,
                }) as Date
            ).getTime(),
        ).toBe(1580428800000);

        expect(
            (
                convertToDate("month: 01, day: 31, year: 2020", {
                    monthBeforeDay: true,
                }) as Date
            ).getTime(),
        ).toBe(1580428800000);
    });

    test("String to a date (zero based month)", () => {
        expect(
            (
                convertToDate("00-31-2020", {
                    monthBeforeDay: true,
                    zeroBasedMonth: true,
                }) as Date
            ).getTime(),
        ).toBe(1580428800000);

        expect(
            (
                convertToDate("00312020", {
                    monthBeforeDay: true,
                    zeroBasedMonth: true,
                }) as Date
            ).getTime(),
        ).toBe(1580428800000);

        expect(
            (
                convertToDate("month: 0, day: 31, year: 2020", {
                    monthBeforeDay: true,
                    zeroBasedMonth: true,
                }) as Date
            ).getTime(),
        ).toBe(1580428800000);
    });

    test("Object to a date", () => {
        expect(
            (
                convertToDate({
                    day: 31,
                    month: 1,
                    year: 2020,
                }) as Date
            ).getTime(),
        ).toBe(1580428800000);

        expect(
            (
                convertToDate({
                    day: "31",
                    month: "01",
                    year: "2020",
                }) as Date
            ).getTime(),
        ).toBe(1580428800000);

        expect(
            (
                convertToDate(
                    {
                        day: 31,
                        month: "00",
                        year: 2020,
                    },
                    {
                        zeroBasedMonth: true,
                    },
                ) as Date
            ).getTime(),
        ).toBe(1580428800000);
    });

    test("Invalid", () => {
        expect(
            convertToDate({
                day: 31,
                year: 2020,
            }),
        ).toBe(undefined);

        expect(
            convertToDate({
                day: "131",
                month: "01",
                year: "2020",
            }),
        ).toBe(undefined);

        expect(convertToDate("1100")).toBe(undefined);
    });
});
