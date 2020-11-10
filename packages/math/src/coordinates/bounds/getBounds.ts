import { Bounds } from "../_interfaces/bounds.interface";
import { CoordinatesXY } from "../_interfaces/coordinatesXY.interface";

export const getBounds = (...coordinates: CoordinatesXY[]): Bounds => {
    return coordinates.reduce(
        (previous, current) => {
            const returnCoordinate = { ...previous };

            if (current.x < previous.min.x) {
                returnCoordinate.min.x = current.x;
            }

            if (current.x > previous.max.x) {
                returnCoordinate.max.x = current.x;
            }

            if (current.y < previous.min.y) {
                returnCoordinate.min.y = current.y;
            }

            if (current.y > previous.max.y) {
                returnCoordinate.max.y = current.y;
            }

            return returnCoordinate;
        },
        {
            min: {
                x: Infinity,
                y: Infinity,
            },
            max: {
                x: -Infinity,
                y: -Infinity,
            },
        }
    );
};
