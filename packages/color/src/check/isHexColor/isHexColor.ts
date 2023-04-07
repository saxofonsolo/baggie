/**
 * Check if a string is a hex color.
 */
export const isHexColor = (input: string) =>
    /^#((([0-9a-f]{3}){1,2})|(([0-9a-f]{4}){1,2}))$/i.test(input);
