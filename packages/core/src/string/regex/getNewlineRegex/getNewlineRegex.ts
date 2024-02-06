/**
 * Returns a RegExp for finding newlines.
 */
export function getNewlineRegex(includeWhitespace = false): RegExp {
    const whitespace = includeWhitespace ? "[^\\S\\r\\n]*" : "";
    return new RegExp(`${whitespace}(\r\n|\r|\n)${whitespace}`, "g");
}
