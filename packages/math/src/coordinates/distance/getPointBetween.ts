import { CoordinatesXY } from "../_interfaces/coordinatesXY.interface";

export const getPointBetween = (
    from: CoordinatesXY,
    to: CoordinatesXY,
    progress = 0.5
): CoordinatesXY => ({
    x: from.x + (to.x - from.x) * progress,
    y: from.y + (to.y - from.y) * progress,
});
