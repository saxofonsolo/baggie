import { CoordinatesXY } from "../_interfaces/coordinatesXY.interface";

export const getSlope = (from: CoordinatesXY, to: CoordinatesXY): number =>
    (to.y - from.y) / (to.x - from.x);
