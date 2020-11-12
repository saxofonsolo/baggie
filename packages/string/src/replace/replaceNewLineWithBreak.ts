/**
 * Replace new lines with break elements.
 *
 * @category Replace
 */
export const replaceNewLineWithBreak = (
    text: string,
    keepWhitespace = false
): string => {
    const whitespace = keepWhitespace ? "" : "[^\\S\\r\\n]*";
    return text.replace(
        new RegExp(`${whitespace}(\\r\\n|\\r|\\n)${whitespace}`, "g"),
        "<br />"
    );
};
