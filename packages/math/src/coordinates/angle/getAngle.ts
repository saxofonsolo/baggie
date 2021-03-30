import { CoordinatesXY } from "../_interfaces/coordinatesXY.interface";
import { radiansToDegrees } from "../../radians/radiansToDegrees";

/**
 * Get the angle from one set of coordinates to another.
 *
 * @remarks
 * * **Be aware** that angles in coordinate systems move counter clockwise,
 * hence this is the default setting. But you can change that in the options
 * argument by setting `clockwise: true`.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getAngle } from "@baggie/math";
 *
 * const from = { x: 10, y: 10 };
 * const to = { x: 20, y: 20 };
 *
 * const angle = getAngle(from, to);
 * // angle = 135
 *
 * const angleWithOffset = getAngle(from, to, { offset: 400 });
 * // angle = 175
 *
 * const angleClockwise = getAngle(from, to, { clockwise: true });
 * // angle = 225
 * ```
 *
 * @category Coordinates - Angle
 */
export const getAngle = (
    from: CoordinatesXY,
    to: CoordinatesXY,
    options?: {
        clockwise?: boolean;
        offset?: number;
    }
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
