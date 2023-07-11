import { RGBA } from "../../_interfaces/rgba.interface";
import { getColorBrightness } from "../getColorBrightness/getColorBrightness";

/**
 * Compare the darkness of two colors.
 */
export const isColorDarkerThan = (
    colorA: string | RGBA,
    colorB: string | RGBA,
): boolean => getColorBrightness(colorA) < getColorBrightness(colorB);
