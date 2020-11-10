import { CoordinatesXY } from "../_interfaces/coordinatesXY.interface";

export const isInsideRadius = (
    position: CoordinatesXY,
    radius: number
): boolean =>
    Math.sqrt(position.x * position.x + position.y * position.y) < radius;
