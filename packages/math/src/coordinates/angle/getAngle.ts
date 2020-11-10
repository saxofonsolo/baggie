import { CoordinatesXY } from "../_interfaces/coordinatesXY.interface";
import { radiansToDegrees } from "../..";

interface GetAngleOptions {
    clockwise?: boolean;
    offset?: number;
}

export const getAngle = (
    from: CoordinatesXY,
    to: CoordinatesXY,
    options?: GetAngleOptions
): number => {
    const settings = {
        clockwise: false,
        offset: 0,
        ...options,
    };

    const x = to.x - from.x;
    const y = settings.clockwise ? to.y - from.y : from.y - to.y;
    const theta = Math.atan2(y, x);
    const angle = radiansToDegrees(theta) + (180 % 360) + settings.offset;

    return settings.offset === 0
        ? angle
        : angle >= 360
        ? angle - 360
        : angle < 0
        ? angle + 360
        : angle;
};
