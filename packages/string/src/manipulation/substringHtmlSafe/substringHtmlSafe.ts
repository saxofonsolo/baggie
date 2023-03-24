/**
 * Get part of a string between the start and end indexes, or to the end of the
 * string. HTML entities are each counted as one character, and HTML tags are
 * ignored.
 *
 * HTML entities begin with an ampersand (&) and ends with a semicolon (;).
 *
 * They are frequently used to display characters that reserved by HTML,
 * invisible or difficult to type.
 */
export const substringHtmlSafe = (
    string: string,
    indexStart: number,
    indexEnd?: number,
    options?: {
        document: globalThis.Document;
    },
) => {
    const end =
        typeof indexEnd === "undefined"
            ? undefined
            : indexEnd < 1
            ? indexEnd - 1
            : indexEnd;
    const regex = new RegExp(
        `&#?[a-z0-9]+;|<[a-z]+[^>]*\\/>|<[a-z]+[^>]*>.?|.<\\/[a-z]+>|.?`,
        "gi",
    );
    const splitString = string.match(regex) as string[];
    const slicedString = splitString.slice(indexStart, end).join("");
    const tempElement = (options?.document || document).createElement("div");
    tempElement.innerHTML = slicedString;
    return tempElement.innerHTML;
};
