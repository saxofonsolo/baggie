import { CoordinatesXY } from "../_interfaces/coordinatesXY.interface";
import { getDistance } from "./getDistance";

interface GetAllDistancesReturn {
    distance: number;
    coordinates: {
        from: CoordinatesXY;
        to: CoordinatesXY;
    };
}

/**
 * Get the all the distances between multiple sets of coordinates sorted from shortest to longest.
 *
 * The coordinates are given as objects like `{ x: 100, y: 100 }`.
 * You can add other values and properties as long as the the
 * objects have the properties `x` and `y`.
 *
 * The first argument `fromCoordinates` is the base from where the distances are
 * measured. If this is set to `null`, distances will be measured between all of
 * the following coordinates.
 *
 * @example
 * **Find all the distances from `{ x: 9, y: 30 }` to other coordinates:**
 * ```ts
 * import { getAllDistances } from "@baggie/math";
 *
 * const results = getAllDistances({ x: 9, y: 30 }, { x: 10, y: 2 }, { x: 20, y: 20 }, { x: -20, y: 20 });
 * /*
 * results = [
 *     {
 *         "distance": 14.866068747318506,
 *         "coordinates": { from: { x: 9, y: 30 }, to: { x: 20, y: 20 } }
 *     }, {
 *         "distance": 28.0178514522438,
 *         "coordinates": { from: { x: 9, y: 30 }, to: { x: 10, y: 2 } }
 *     },
 *     {
 *         "distance": 30.675723300355934,
 *         "coordinates": { from: { x: 9, y: 30 }, to: { x: -20, y: 20 } }
 *     }
 * ]
 * *\/
 * ```
 *
 * @example
 * **Find all the distances between all the coordinates:**
 * ```ts
 * import { getAllDistances } from "@baggie/math";
 *
 * const results = getAllDistances(null,
 *     { x: -10, y: -10, name: "a" },
 *     { x: 1, y: 1, name: "b" },
 *     { x: 2, y: 2, name: "c" },
 *     { x: 30, y: 50, name: "d" }
 * );
 * /*
 * results = [
 *     {
 *         "distance": 1.4142135623730951,
 *         "coordinates": { from: { "x": 1, "y": 1, "name": "b" }, to: { "x": 2, "y": 2, "name": "c" } }
 *     },
 *     {
 *         "distance": 15.556349186104045,
 *         "coordinates": { from: { "x": -10, "y": -10, "name": "a" }, to: { "x": 1, "y": 1, "name": "b" } }
 *     },
 *     {
 *         "distance": 16.97056274847714,
 *         "coordinates": { from: { "x": -10, "y": -10, "name": "a" }, to: { "x": 2, "y": 2, "name": "c" } }
 *     },
 *     {
 *         "distance": 55.569775957799216,
 *         "coordinates": { from: { "x": 2, "y": 2, "name": "c" }, to: { "x": 30, "y": 50, "name": "d" } }
 *     },
 *     {
 *         "distance": 56.938563381947034,
 *         "coordinates": { from: { "x": 1, "y": 1, "name": "b" }, to: { "x": 30, "y": 50, "name": "d" } }
 *     },
 *     {
 *         "distance": 72.11102550927978,
 *         "coordinates": { from: { "x": -10, "y": -10, "name": "a" }, to: { "x": 30, "y": 50, "name": "d" } }
 *     }
 * ]
 * *\/
 * ```
 *
 * @category Coordinate - Distance
 */
export const getAllDistances = (
    fromCoordinates: CoordinatesXY | null,
    ...toCoordinates: CoordinatesXY[]
): GetAllDistancesReturn[] => {
    const baseCoordinates = fromCoordinates ? [fromCoordinates] : toCoordinates;
    const offset = fromCoordinates ? 0 : 1;
    const allDistances: GetAllDistancesReturn[] = [];

    baseCoordinates.forEach((set1: CoordinatesXY, index1: number) => {
        toCoordinates
            .slice(index1 + offset)
            .forEach((set2: CoordinatesXY, index2: number) => {
                allDistances.push({
                    distance: getDistance(set1, set2),
                    coordinates: {
                        from: fromCoordinates
                            ? fromCoordinates
                            : toCoordinates[index1],
                        to: toCoordinates[index2 + index1 + offset],
                    },
                });
            });
    });

    allDistances.sort((a, b) =>
        a.distance > b.distance ? 1 : b.distance > a.distance ? -1 : 0
    );

    return allDistances;
};
