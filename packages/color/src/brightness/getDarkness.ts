import { RGBA } from "../_interfaces/rgba.interface";
import { getBrightness } from "./getBrightness/getBrightness";

/**
 * Get the perceived darkness of a color as percentage in decimal form.
 *
 * @see http://alienryderflex.com/hsp.html
 *
 * @category Brightness
 * @returns A number from 0 to 1, 1 being the darkest and 0 being not dark at all.
 */
export const getDarkness = (color: RGBA): number => 1 - getBrightness(color);
