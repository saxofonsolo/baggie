/**
 * Get part of a string between the start and end indexes, or to the end of the
 * string. HTML entities are each counted as one character.
 */
export const substringHtmlEntitySafe = (
    string: string,
    indexStart: number,
    indexEnd?: number,
) => {
    const end =
        typeof indexEnd === "undefined"
            ? undefined
            : indexEnd < 1
            ? indexEnd - 1
            : indexEnd;

    return (string.match(/&#?[a-z0-9]+;|.?/gi) as string[])
        .slice(indexStart, end)
        .join("");
};
