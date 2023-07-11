import { getNewlineRegex } from "../../regex/getNewlineRegex/getNewlineRegex";

/**
 * Replace newlines with break elements.
 */
export const convertNewlinesToBreaks = (
    string: string,
    keepWhitespace = false,
): string => string.replace(getNewlineRegex(!keepWhitespace), "<br />");
