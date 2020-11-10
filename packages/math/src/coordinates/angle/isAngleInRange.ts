export const isAngleInRange = (
    angle: number,
    ...ranges: [number, number][]
): boolean =>
    ranges.reduce<boolean>((inRange, range) => {
        if (inRange) return inRange;

        const [from, to] = range;

        if (from > to) {
            return (
                (angle >= -(360 % from) && angle <= to) ||
                (angle >= from && angle <= 360 + to)
            );
        }

        return angle >= from && angle <= to;
    }, false);
