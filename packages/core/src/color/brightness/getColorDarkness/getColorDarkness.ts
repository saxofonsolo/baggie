import { RGBA } from "../../_interfaces/rgba.interface";
import { getColorBrightness } from "../getColorBrightness/getColorBrightness";

/**
 * Get the perceived darkness of a color as percentage in decimal form.
 */
export function getColorDarkness(color: string | RGBA): number {
    return 1 - getColorBrightness(color);
}
