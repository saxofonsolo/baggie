import { RGBA } from "../../_interfaces/rgba.interface";
import { convertHexToRgb } from "../../convert/convertHexToRgb/convertHexToRgb";

/**
 * Get the perceived brightness of a color as percentage in decimal form.
 */
export const getBrightness = (color: string | RGBA): number => {
    try {
        const { red, green, blue } =
            typeof color === "string" ? convertHexToRgb(color) : color;
        const perceivedBrightness = Math.sqrt(
            0.299 * (red * red) +
                0.587 * (green * green) +
                0.114 * (blue * blue),
        );

        // Return perceived brightness as percentage in decimal form
        return perceivedBrightness / 2.55 / 100;
    } catch (err) {
        return 0;
    }
};
