import { getMean } from "../../../math";
import { RGBA } from "../../_interfaces/rgba.interface";
import { convertStringToRgb } from "../../convert/convertStringToRgb/convertStringToRgb";
import { convertRgbToHex } from "../../convert/convertRgbToHex/convertRgbToHex";

/**
 * Blend two colors together with the screen mode.
 */
export function screenColors(colorA: string | RGBA, colorB: string | RGBA) {
    const rgb1 =
        typeof colorA === "string" ? convertStringToRgb(colorA) : colorA;
    const rgb2 =
        typeof colorB === "string" ? convertStringToRgb(colorB) : colorB;
    return convertRgbToHex({
        red: Math.round(1 - (1 - rgb1.red) * (1 - rgb2.red)),
        green: Math.round(1 - (1 - rgb1.green) * (1 - rgb2.green)),
        blue: Math.round(1 - (1 - rgb1.blue) * (1 - rgb2.blue)),
        alpha: Math.min(getMean([rgb1.alpha || 1, rgb2.alpha || 1]), 1),
    });
}
