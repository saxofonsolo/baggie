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
 * The coordinates are given as arrays `[x, y]` or objects like `{ x: 100, y: 100 }`.
 * You can add other values and properties as long as the first two values in the array are x and y, or as long as the
 * objects have the properties "x" and "y".
 *
 * The first argument `fromCoordinates` is the base from where the distances are measured. If this is set to `null`,
 * distances will be measured between all the coordinates given in the `toCoordinates` argument.
 *
 * @example
 * **Find all the distances from `[9, 30]` to other coordinates:**
 * ```ts
 * import { getAllDistances } from "@baggie/math";
 *
 * const results = getAllDistances([9, 30], [10, 2], [20, 20], [-20, 20]);
 * /*
 * results = [
 *     {
 *         "distance": 14.866068747318506,
 *         "coordinates": [[9, 30], [20, 20]]
 *     }, {
 *         "distance": 28.0178514522438,
 *         "coordinates": [[9, 30], [10, 2]]
 *     },
 *     {
 *         "distance": 30.675723300355934,
 *         "coordinates": [[9, 30], [-20, 20]]
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
 *         "coordinates": [{ "x": 1, "y": 1, "name": "b" }, { "x": 2, "y": 2, "name": "c" }]
 *     },
 *     {
 *         "distance": 15.556349186104045,
 *         "coordinates": [{ "x": -10, "y": -10, "name": "a" }, { "x": 1, "y": 1, "name": "b" }]
 *     },
 *     {
 *         "distance": 16.97056274847714,
 *         "coordinates": [{ "x": -10, "y": -10, "name": "a" }, { "x": 2, "y": 2, "name": "c" }]
 *     },
 *     {
 *         "distance": 55.569775957799216,
 *         "coordinates": [{ "x": 2, "y": 2, "name": "c" }, { "x": 30, "y": 50, "name": "d" }]
 *     },
 *     {
 *         "distance": 56.938563381947034,
 *         "coordinates": [{ "x": 1, "y": 1, "name": "b" }, { "x": 30, "y": 50, "name": "d" }]
 *     },
 *     {
 *         "distance": 72.11102550927978,
 *         "coordinates": [{ "x": -10, "y": -10, "name": "a" }, { "x": 30, "y": 50, "name": "d" }]
 *     }
 * ]
 * *\/
 * ```
 *
 * @category Distance
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
