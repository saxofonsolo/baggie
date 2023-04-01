import React, { useMemo } from "react";
import { TextareaWithHighlightsProps } from "../TextareaWithHighlights.props";

export const useValueWithHighlights = (
    value: string,
    highlights: TextareaWithHighlightsProps["highlights"],
) =>
    useMemo(() => {
        // Escape now if the highlights argument is undefined
        if (!highlights) return [];

        // Split the highlights argument into categories
        const { ranges, regexes, strings } = (
            (Array.isArray(highlights)
                ? typeof highlights[0] === "number"
                    ? [highlights]
                    : highlights
                : [highlights]) as (string | [number, number] | RegExp)[]
        ).reduce<{
            ranges: [number, number][];
            regexes: RegExp[];
            strings: string[];
        }>(
            (acc, cur) => {
                if (typeof cur === "string") {
                    acc.strings.push(cur);
                } else if (
                    Array.isArray(cur) &&
                    typeof cur[0] === "number" &&
                    typeof cur[1] === "number"
                ) {
                    acc.ranges.push(cur);
                } else if (cur instanceof RegExp) {
                    acc.regexes.push(cur);
                }
                return acc;
            },
            { ranges: [], regexes: [], strings: [] },
        );

        // Escape now if no valid highlights are defined in the categories
        if (!ranges.length && !regexes.length && !strings.length) return [];

        // Go through strings to highlight and convert them to ranges
        const stringsAsRanges: [number, number][] = [];
        for (let string = 0; string < strings.length; string++) {
            let i = -1;
            while ((i = value.indexOf(strings[string], i + 1)) >= 0) {
                stringsAsRanges.push([i, i + strings[string].length]);
            }
        }

        // Go through regular expressions to highlight and convert them to ranges
        const regexesAsRanges: [number, number][] = [];
        for (let regex = 0; regex < regexes.length; regex++) {
            const matches: [number, number][] = [];
            if (regexes[regex].global) {
                let prevIndex = -1;
                let match: RegExpExecArray | null;
                while (
                    (match = regexes[regex].exec(value)) !== null &&
                    (!matches.length || match.index > matches[prevIndex][0])
                ) {
                    matches.push([match.index, match.index + match[0].length]);
                    prevIndex++;
                }
            } else {
                const match = regexes[regex].exec(value);
                if (match) {
                    matches.push([match.index, match.index + match[0].length]);
                }
            }
            regexesAsRanges.push(...matches);
        }

        // Concatenate all ranges into a single array
        const allRanges = [...ranges, ...stringsAsRanges, ...regexesAsRanges];

        // Escape now if no highlight ranges exist
        if (!allRanges.length) return [];

        // Sort the ranges
        const sortedRanges = allRanges.sort((a, b) => a[0] - b[0]);

        // Merge the ranges to avoid overlapping
        const mergedRanges = [sortedRanges[0]];
        for (let i = 1; i < sortedRanges.length; i++) {
            const [start, end] = sortedRanges[i];
            const prev = mergedRanges[mergedRanges.length - 1];
            if (prev[1] >= start) {
                prev[1] = Math.max(prev[1], end);
            } else {
                mergedRanges.push(sortedRanges[i]);
            }
        }

        return [
            value.slice(0, mergedRanges[0][0]),
            ...mergedRanges.map(([from, to], index) => (
                <React.Fragment key={`${from}:${to}`}>
                    <mark>{value.slice(from, to)}</mark>
                    {mergedRanges[index + 1]
                        ? value.slice(to, mergedRanges[index + 1][0])
                        : undefined}
                </React.Fragment>
            )),
        ];
    }, [value, highlights]);
