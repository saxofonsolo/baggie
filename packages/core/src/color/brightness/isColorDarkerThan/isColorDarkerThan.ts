import { RGBA } from "../../_interfaces/rgba.interface";
import { getColorBrightness } from "../getColorBrightness/getColorBrightness";

/**
 * Compare the darkness of two colors.
 */
export function isColorDarkerThan(
    colorA: string | RGBA,
    colorB: string | RGBA,
): boolean {
    return getColorBrightness(colorA) < getColorBrightness(colorB);
}
