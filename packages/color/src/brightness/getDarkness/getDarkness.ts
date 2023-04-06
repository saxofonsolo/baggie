import { RGBA } from "../../_interfaces/rgba.interface";
import { getBrightness } from "../getBrightness/getBrightness";

/**
 * Get the perceived darkness of a color as percentage in decimal form.
 */
export const getDarkness = (color: string | RGBA): number =>
    1 - getBrightness(color);
