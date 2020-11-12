/**
 * Get the duration when supplying speed and distance.
 *
 * If speed is 100 (meters per minute) and distance is 10 (meters),
 * then the duration will be 10 (minutes).
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getDuration } from "@baggie/math";
 *
 * const duration = getDuration(10, 100);
 * // duration = 10
 * ```
 *
 * @category Time
 */
export const getDuration = (speed: number, distance: number): number =>
    distance / speed;
