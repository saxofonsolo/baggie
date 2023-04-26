import { getNewlineRegex } from "../../regex/getNewlineRegex/getNewlineRegex";

/**
 * Replace new lines with break elements.
 */
export const convertNewLinesToBreaks = (
    string: string,
    keepWhitespace = false,
): string => string.replace(getNewlineRegex(!keepWhitespace), "<br />");
