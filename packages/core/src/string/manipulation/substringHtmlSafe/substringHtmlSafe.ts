type VerboseOutput = {
    output: string;
    realIndexStart: number;
    realIndexEnd: number;
};

/**
 * Get part of a string between the start and end indexes, or to the end of the
 * string. HTML entities are each counted as one character, and HTML tags are
 * ignored.
 */
export function substringHtmlSafe<Verbose extends boolean = false>(
    string: string,
    indexStart: number,
    indexEnd?: number,
    options?: {
        document?: globalThis.Document;
        verbose?: Verbose;
    },
): Verbose extends true ? VerboseOutput : string {
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
    const output = tempElement.innerHTML;
    const realIndexStart = options?.verbose
        ? splitString.slice(0, indexStart).join("").length
        : 0;

    return (
        options?.verbose
            ? {
                  output,
                  realIndexStart,
                  realIndexEnd: realIndexStart + slicedString.length,
              }
            : output
    ) as Verbose extends true ? VerboseOutput : string;
}
