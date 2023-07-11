import { CoordinatesXY } from "../../_interfaces/coordinatesXY.interface";
import { radiansToDegrees } from "../../../radians/radiansToDegrees";

/**
 * Get the angle from one set of coordinates to another.
 */
export const getAngle = (
    from: CoordinatesXY,
    to: CoordinatesXY,
    options?: {
        clockwise?: boolean;
        offset?: number;
    },
): number => {
    if (from.x === to.x && from.y === to.y) return 0;

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
