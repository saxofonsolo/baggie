import { RGBA } from "..";

/**
 * Convert an hex color to an RGB color value.
 *
 * @category Convert
 */
export const convertHexToRgba = (hex: string): RGBA | null => {
    const hexMatch = hex.match(
        /^#((([0-9a-f]{3}){1,2})|(([0-9a-f]{4}){1,2}))$/i
    );

    if (hexMatch && hexMatch.length > 1) {
        const match = hexMatch[1];

        if (match.length === 3 || match.length === 4) {
            const rgb = [
                match.charAt(0),
                match.charAt(1),
                match.charAt(2),
                match.charAt(3) || "F",
            ];

            return {
                red: parseInt(rgb[0] + rgb[0], 16),
                green: parseInt(rgb[1] + rgb[1], 16),
                blue: parseInt(rgb[2] + rgb[2], 16),
                alpha: parseInt(rgb[3] + rgb[3], 16) / 255,
            };
        } else {
            const rgb = [
                match.charAt(0) + match.charAt(1),
                match.charAt(2) + match.charAt(3),
                match.charAt(4) + match.charAt(5),
                match.charAt(7) ? match.charAt(6) + match.charAt(7) : "FF",
            ];

            return {
                red: parseInt(rgb[0], 16),
                green: parseInt(rgb[1], 16),
                blue: parseInt(rgb[2], 16),
                alpha: parseInt(rgb[3], 16) / 255,
            };
        }
    }

    return null;
};
