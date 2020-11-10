import { CoordinatesXY } from "../_interfaces/coordinatesXY.interface";
import { isInsideRadius } from "./isInsideRadius";

export const keepInsideRadius = (
    position: CoordinatesXY,
    radius: number
): CoordinatesXY => {
    if (isInsideRadius(position, radius)) {
        return position;
    }

    const radians = Math.atan2(position.y, position.x);
    return {
        x: Math.cos(radians) * radius,
        y: Math.sin(radians) * radius,
    };
};
