/**
 * Get the perceived brightness of a color as percentage in decimal form.
 *
 * @param color - Color in hex-format
 * @returns A number from 0 to 1, 1 being the brightest and 0 being not bright at all.
 */
export const getBrightness = (color: string): number => {
    const hexMatch = color.match(
        /^#((([0-9a-f]{3}){1,2})|(([0-9a-f]{4}){1,2}))$/i
    );

    if (hexMatch && hexMatch.length) {
        // Convert hex to RGB

        const hex = hexMatch[1];

        let red;
        let green;
        let blue;

        if (hex.length === 3 || hex.length === 4) {
            // Hex is 3 or 4 characters - convert to RGB

            const rgb = [
                hex.charAt(0),
                hex.charAt(1),
                hex.charAt(2),
                hex.charAt(3) || "F",
            ];

            red = parseInt(rgb[0] + rgb[0], 16);
            green = parseInt(rgb[1] + rgb[1], 16);
            blue = parseInt(rgb[2] + rgb[2], 16);
        } else {
            // Hex is 6 or 8 characters - convert to RGB

            const rgb = [
                hex.charAt(0) + hex.charAt(1),
                hex.charAt(2) + hex.charAt(3),
                hex.charAt(4) + hex.charAt(5),
                hex.charAt(7) ? hex.charAt(6) + hex.charAt(7) : "FF",
            ];

            red = parseInt(rgb[0], 16);
            green = parseInt(rgb[1], 16);
            blue = parseInt(rgb[2], 16);
        }

        // Calculate perceived brightness from RGB (http://alienryderflex.com/hsp.html)
        const perceivedBrightness = Math.sqrt(
            0.299 * (red * red) +
                0.587 * (green * green) +
                0.114 * (blue * blue)
        );

        // Return perceived brightness as percentage in decimal form
        return Math.round(perceivedBrightness / 2.55) / 100;
    }

    throw new Error(`Color must be in hex format: ${color}`);
};
