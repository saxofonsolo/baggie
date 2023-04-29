import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { mergeIntervals } from "./mergeIntervals";

interface Props {
    ranges: string;
}

export const Example = (props: Props) => {
    const [ranges, setRanges] = useState(props.ranges);
    const [combineEquals, setCombineEquals] = useState(true);

    const { realRanges, result } = useMemo(() => {
        const realRanges = ranges
            .replace(/][^[{]+/g, "]\n")
            .replace(/}[^[{]+/g, "}\n")
            .split("\n")
            .map((item) => {
                try {
                    return JSON.parse(item.replace(/["`']/g, "").replace(/([a-z]+)/g, `"$1"`));
                } catch (err) {
                    return undefined;
                }
            })
            .filter(
                (x) =>
                    x &&
                    ((Array.isArray(x) && x.length === 2) ||
                        (typeof x === "object" &&
                            typeof x.from === "number" &&
                            typeof x.to === "number")),
            );
        const result = mergeIntervals(realRanges, combineEquals);

        return { realRanges, result };
    }, [ranges, combineEquals]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Ranges" labelForId="ranges-input">
                    <textarea
                        id="ranges-input"
                        value={ranges}
                        onChange={({ target }) => setRanges(target.value)}
                        style={{ width: "100%", maxWidth: "360px" }}
                        autoComplete="off"
                        rows={3}
                    />
                </InputWrapper>

                <InputWrapper label="Result" labelForId={undefined}>
                    <div style={{ padding: "5px 0" }}>{JSON.stringify(result)}</div>
                </InputWrapper>
            </div>

            <label>
                <input
                    type="checkbox"
                    checked={combineEquals}
                    onChange={() => setCombineEquals((current) => !current)}
                />{" "}
                Combine equals
            </label>

            <Source
                dark
                code={`
import { mergeIntervals } from "@baggie/math";

const ranges = ${
                    realRanges.length === 1
                        ? JSON.stringify(realRanges[0], null, 4)
                        : JSON.stringify(realRanges, null, 4)
                };

const result = mergeIntervals(ranges);
/*
result = ${JSON.stringify(result, null, 4)}
*/
`}
            />
        </>
    );
};
