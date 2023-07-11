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
            }),
        );
    });
});
