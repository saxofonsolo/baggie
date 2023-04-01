/**
 * Get an array of angles sorted by which is closest to the target.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getClosestAngles } from "@baggie/math";
 *
 * const target = 350;
 * const angles = [
 *     0,
 *     10,
 *     100,
 *     200,
 *     300,
 * ];
 * const sorted = getClosestAngles(target, angles);
 * // sorted = [0, 10, 300, 100, 200]
 * ```
 *
 * @category Geometry - Angle
 */
export const getClosestAngles = (target: number, angles: number[]): number[] =>
    [...angles].sort((a, b) => {
        const aRawDiff = a > target ? a - target : target - a;
        const aModulusDiff = aRawDiff % 360;
        const aDistance =
            aModulusDiff > 180 ? 360 - aModulusDiff : aModulusDiff;

        const bRawDiff = b > target ? b - target : target - b;
        const bModulusDiff = bRawDiff % 360;
        const bDistance =
            bModulusDiff > 180 ? 360 - bModulusDiff : bModulusDiff;

        return aDistance < bDistance ? -1 : aDistance > bDistance ? 1 : 0;
    });
