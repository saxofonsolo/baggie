/**
 * Returns a regular expression for matching all HTML and XML tags in a string.
 */
export const getTagsRegex = (groupSequentialTags = false): RegExp =>
    new RegExp(`(<\\/?[a-z!?][^>]*>)${groupSequentialTags ? "+" : ""}`, "ig");
