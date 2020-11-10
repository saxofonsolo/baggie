import { CoordinatesXY } from "../_interfaces/coordinatesXY.interface";

export const getDistance = (from: CoordinatesXY, to: CoordinatesXY): number =>
    Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2));
