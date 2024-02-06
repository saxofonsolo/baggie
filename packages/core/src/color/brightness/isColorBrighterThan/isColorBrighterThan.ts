import { RGBA } from "../../_interfaces/rgba.interface";
import { getColorBrightness } from "../getColorBrightness/getColorBrightness";

/**
 * Compare the brightness of two colors.
 */
export function isColorBrighterThan(
    colorA: string | RGBA,
    colorB: string | RGBA,
): boolean {
    return getColorBrightness(colorA) > getColorBrightness(colorB);
}
