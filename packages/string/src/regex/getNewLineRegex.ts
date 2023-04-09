/**
 * Returns a RegExp for finding new lines.
 */
export const getNewLineRegex = (includeWhitespace = false): RegExp => {
    const whitespace = includeWhitespace ? "[^\\S\\r\\n]*" : "";
    return new RegExp(`${whitespace}(\r\n|\r|\n)${whitespace}`, "g");
};
