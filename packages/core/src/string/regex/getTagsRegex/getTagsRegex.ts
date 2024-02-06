/**
 * Returns a regular expression for matching all HTML and XML tags in a string.
 */
export function getTagsRegex(groupSequentialTags = false): RegExp {
    return new RegExp(
        `(<\\/?[a-z!?][^>]*>)${groupSequentialTags ? "+" : ""}`,
        "ig",
    );
}
