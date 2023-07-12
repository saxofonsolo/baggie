import { convertRgbToHex, getColorBrightness } from "@baggie/core";
import { RGBA } from "../_interfaces/rgba.interface";

/**
 * Get the perceived brightness of a color as percentage in decimal form.
 *
 * @see http://alienryderflex.com/hsp.html
 *
 * @category Brightness
 * @returns A number from 0 to 1, 1 being the brightest and 0 being not bright at all.
 */
export const getBrightness = (rgb: RGBA) =>
    getColorBrightness(convertRgbToHex(rgb));
