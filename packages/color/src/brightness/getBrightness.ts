import { RGBA } from "../_interfaces/rgba.interface";

/**
 * Get the perceived brightness of a color as percentage in decimal form.
 *
 * @see http://alienryderflex.com/hsp.html
 *
 * @category Brightness
 * @returns A number from 0 to 1, 1 being the brightest and 0 being not bright at all.
 */
export const getBrightness = ({ red, green, blue }: RGBA): number => {
    const perceivedBrightness = Math.sqrt(
        0.299 * (red * red) + 0.587 * (green * green) + 0.114 * (blue * blue),
    );

    // Return perceived brightness as percentage in decimal form
    return perceivedBrightness / 2.55 / 100;
};
