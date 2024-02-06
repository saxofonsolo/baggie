interface GetTimeDifferenceReturn {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
}

/**
 * Calculate the difference between two timestamps.
 */
export function getTimeDifference(
    fromTimestampMs: number,
    toTimestampMs: number,
): GetTimeDifferenceReturn {
    let difference = Math.abs(fromTimestampMs - toTimestampMs);

    const onlyMilliseconds = difference;

    difference = Math.floor(difference / 1000);
    const milliseconds = onlyMilliseconds - difference * 1000;
    const seconds = difference % 60;
    difference = Math.floor(difference / 60);
    const minutes = difference % 60;
    difference = Math.floor(difference / 60);
    const hours = difference % 24;
    difference = Math.floor(difference / 24);
    const days = difference;

    return {
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
    };
}
