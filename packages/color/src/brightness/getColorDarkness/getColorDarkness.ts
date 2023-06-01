import { RGBA } from "../../_interfaces/rgba.interface";
import { getColorBrightness } from "../getColorBrightness/getColorBrightness";

/**
 * Get the perceived darkness of a color as percentage in decimal form.
 */
export const getColorDarkness = (color: string | RGBA): number =>
    1 - getColorBrightness(color);
