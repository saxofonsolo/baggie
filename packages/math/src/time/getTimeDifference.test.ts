import { getTimeDifference } from "./getTimeDifference";

describe("getTimeDifference", () => {
    test("Get the duration when speed is 10 and distance is 100", () => {
        expect(getTimeDifference(1523607256543, 1533906712955)).toEqual(
            expect.objectContaining({
                days: 119,
                hours: 4,
                minutes: 57,
                seconds: 36,
                milliseconds: 412,
                singleUnit: {
                    onlyDays: 119.20667143518519,
                    onlyHours: 2860.9601144444446,
                    onlyMinutes: 171657.60686666667,
                    onlySeconds: 10299456.412,
                    onlyMilliseconds: 10299456412,
                },
            }),
        );
    });
});
