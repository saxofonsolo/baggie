import { RGBA } from "../../_interfaces/rgba.interface";
import { getColorBrightness } from "../getColorBrightness/getColorBrightness";

/**
 * Compare the brightness of two colors.
 */
export const isColorBrighterThan = (
    colorA: string | RGBA,
    colorB: string | RGBA,
): boolean => getColorBrightness(colorA) > getColorBrightness(colorB);
