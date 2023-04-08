import { getMean } from "@baggie/math";
import { RGBA } from "../../_interfaces/rgba.interface";
import { convertHexToRgb } from "../../convert/convertHexToRgb";
import { convertRgbToHex } from "../../convert/convertRgbToHex";

/**
 * Blend two colors together with the screen mode.
 */
export const screenColors = (colorA: string | RGBA, colorB: string | RGBA) => {
    try {
        const rgb1 =
            typeof colorA === "string" ? convertHexToRgb(colorA) : colorA;
        const rgb2 =
            typeof colorB === "string" ? convertHexToRgb(colorB) : colorB;
        return convertRgbToHex({
            red: Math.round(1 - (1 - rgb1.red) * (1 - rgb2.red)),
            green: Math.round(1 - (1 - rgb1.green) * (1 - rgb2.green)),
            blue: Math.round(1 - (1 - rgb1.blue) * (1 - rgb2.blue)),
            alpha: Math.min(getMean([rgb1.alpha || 1, rgb2.alpha || 1]), 1),
        });
    } catch (err) {
        return undefined;
    }
};
