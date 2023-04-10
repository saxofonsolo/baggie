import { getTagsRegex } from "../../regex/getTagsRegex";

/**
 * Strip HTML and XML tags from a string. Tags are replaced with a space unless .
 */
export const stripTagsFromString = (
    string: string,
    replaceWith = " ",
    trim = true,
): string => {
    const newString = string.replace(getTagsRegex(true), replaceWith);
    return trim ? newString.trim() : newString;
};
