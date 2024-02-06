import { getCylinderVolume } from "../cylinder/getCylinderVolume";

/**
 * Get volume of a cone.
 *
 * @example
 * **Basic usage:**
 * ```ts
 * import { getConeVolume } from "@baggie/core";
 *
 * const radius = 10;
 * const height = 20;
 * const volume = getConeVolume(radius, height);
 * // volume = 2094.3951023931954
 * ```
 */
export function getConeVolume(radius: number, height: number): number {
    return getCylinderVolume(radius, height) / 3;
}
