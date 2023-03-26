type VerboseOutput = {
    output: string;
    realIndexStart: number;
    realIndexEnd: number;
};

/**
 * Get part of a string between the start and end indexes, or to the end of the
 * string. HTML entities are each counted as one character.
 */
export const substringHtmlEntitySafe = <Verbose extends boolean = false>(
    string: string,
    indexStart: number,
    indexEnd?: number,
    options?: {
        verbose?: Verbose;
    },
): Verbose extends true ? VerboseOutput : string => {
    const end =
        typeof indexEnd === "undefined"
            ? undefined
            : indexEnd < 1
            ? indexEnd - 1
            : indexEnd;

    const splitString = string.match(/&#?[a-z0-9]+;|.?/gi) as string[];
    const output = splitString.slice(indexStart, end).join("");
    const realIndexStart = options?.verbose
        ? splitString.slice(0, indexStart).join("").length
        : 0;

    return (
        options?.verbose
            ? {
                  output,
                  realIndexStart,
                  realIndexEnd: realIndexStart + output.length,
              }
            : output
    ) as Verbose extends true ? VerboseOutput : string;
};
