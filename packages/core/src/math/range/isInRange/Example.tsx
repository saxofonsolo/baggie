import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { isInRange } from "./isInRange";

interface Props {
    number: number;
    ranges: string;
}

export const Example = (props: Props) => {
    const [input, setInput] = useState(props.number);
    const [ranges, setRanges] = useState(props.ranges);

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
        const result = isInRange(input, realRanges);

        return { realRanges, result };
    }, [input, ranges]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Number" labelForId="number-input">
                    <input
                        id="number-input"
                        type="number"
                        value={input}
                        onChange={({ target }) => setInput(target.valueAsNumber || 0)}
                        autoComplete="off"
                    />
                </InputWrapper>

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
                    <div style={{ padding: "5px 0" }}>{result ? "true" : "false"}</div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { isInRange } from "@baggie/core";

const range${realRanges.length === 1 ? "" : "s"} = ${
                    realRanges.length === 1
                        ? JSON.stringify(realRanges[0], null, 4)
                        : JSON.stringify(realRanges, null, 4)
                };

const result = isInRange(${input}, range${realRanges.length === 1 ? "" : "s"});
// result = ${result ? "true" : "false"}
`}
            />
        </>
    );
};
