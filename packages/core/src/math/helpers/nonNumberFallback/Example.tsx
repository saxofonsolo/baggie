import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { nonNumberFallback } from "./nonNumberFallback";

interface Props {
    defaultInput: string;
    defaultFallback: number;
}

export const Example = (props: Props) => {
    const [input, setInput] = useState(props.defaultInput);
    const [fallback, setFallback] = useState(props.defaultFallback);

    const output = useMemo(() => nonNumberFallback(input, fallback), [input, fallback]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Input" labelForId="input-input">
                    <input
                        id="input-input"
                        value={input}
                        onChange={({ target }) => setInput(target.value)}
                    />
                </InputWrapper>

                <InputWrapper label="Fallback" labelForId="fallback-input">
                    <input
                        id="fallback-input"
                        value={fallback}
                        type="number"
                        onChange={({ target }) => setFallback(target.valueAsNumber)}
                    />
                </InputWrapper>

                <InputWrapper label="Output" labelForId={undefined}>
                    <div style={{ padding: "5px 0" }}>{output}</div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { nonNumberFallback } from "@baggie/core";

const input = ${isNaN(input as unknown as number) ? `"${input}"` : input.trim() || "undefined"};
const fallback = ${fallback};

const output = nonNumberFallback(input, fallback);
// output = ${output}
`}
            />
        </>
    );
};
