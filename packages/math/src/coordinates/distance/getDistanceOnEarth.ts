import { CoordinatesLatLng } from "../_interfaces/coordinatesLatLng.interface";
import { getDistanceOnSphere } from "./getDistanceOnSphere";

/**
 * Get distance between two sets of coordinates on Earth in kilometers using the Haversine Distance Formula.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getDistanceOnEarth } from "@baggie/math";
 *
 * const from = { lat: 56.15674, lng: 10.21076 };
 * const to = { lat: 57.048, lng: 9.9187 };
 *
 * const distance = getDistanceOnEarth(from, to);
 * // distance = 100.70265108699398
 * ```
 */
export const getDistanceOnEarth = (
    from: CoordinatesLatLng,
    to: CoordinatesLatLng,
): number => getDistanceOnSphere(from, to, 12742);
