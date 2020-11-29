import { convertToDate } from "./convertToDate";

describe("convertToDate", () => {
    test("String to a date", () => {
        expect((convertToDate("31-01-2020") as Date).getTime()).toBe(
            1580425200000
        );

        expect((convertToDate("31012020") as Date).getTime()).toBe(
            1580425200000
        );

        expect((convertToDate("310120") as Date).getTime()).toBe(1580425200000);

        expect(
            (convertToDate("day: 31, month: 01, year: 20") as Date).getTime()
        ).toBe(1580425200000);
    });

    test("String to a date (month before day)", () => {
        expect(
            (convertToDate("01-31-2020", {
                monthBeforeDay: true,
            }) as Date).getTime()
        ).toBe(1580425200000);

        expect(
            (convertToDate("01312020", {
                monthBeforeDay: true,
            }) as Date).getTime()
        ).toBe(1580425200000);

        expect(
            (convertToDate("013120", {
                monthBeforeDay: true,
            }) as Date).getTime()
        ).toBe(1580425200000);

        expect(
            (convertToDate("month: 01, day: 31, year: 20", {
                monthBeforeDay: true,
            }) as Date).getTime()
        ).toBe(1580425200000);
    });

    test("String to a date (zero based month)", () => {
        expect(
            (convertToDate("00-31-2020", {
                monthBeforeDay: true,
                zeroBasedMonth: true,
            }) as Date).getTime()
        ).toBe(1580425200000);

        expect(
            (convertToDate("00312020", {
                monthBeforeDay: true,
                zeroBasedMonth: true,
            }) as Date).getTime()
        ).toBe(1580425200000);

        expect(
            (convertToDate("003120", {
                monthBeforeDay: true,
                zeroBasedMonth: true,
            }) as Date).getTime()
        ).toBe(1580425200000);

        expect(
            (convertToDate("month: 0, day: 31, year: 20", {
                monthBeforeDay: true,
                zeroBasedMonth: true,
            }) as Date).getTime()
        ).toBe(1580425200000);
    });

    test("Object to a date", () => {
        expect(
            (convertToDate({
                day: 31,
                month: 1,
                year: 2020,
            }) as Date).getTime()
        ).toBe(1580425200000);

        expect(
            (convertToDate({
                day: "31",
                month: "01",
                year: "2020",
            }) as Date).getTime()
        ).toBe(1580425200000);

        expect(
            (convertToDate(
                {
                    day: 31,
                    month: "00",
                    year: 20,
                },
                {
                    zeroBasedMonth: true,
                }
            ) as Date).getTime()
        ).toBe(1580425200000);
    });
});
