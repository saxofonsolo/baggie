import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { clamp } from "./clamp";

interface Props {
    input: number;
    min: number;
    max: number;
}

export const Example = (props: Props) => {
    const [input, setInput] = useState(props.input);
    const [min, setMin] = useState(props.min);
    const [max, setMax] = useState(props.max);

    const result = useMemo(() => clamp(input, { min, max }), [input, min, max]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Input" labelForId="input-input">
                    <input
                        id="input-input"
                        type="number"
                        value={input}
                        onChange={({ target }) => setInput(target.valueAsNumber || 0)}
                        autoComplete="off"
                    />
                </InputWrapper>

                <InputWrapper label="Min" labelForId="min-input">
                    <input
                        id="min-input"
                        type="number"
                        value={min}
                        onChange={({ target }) => setMin(target.valueAsNumber || 0)}
                        autoComplete="off"
                    />
                </InputWrapper>

                <InputWrapper label="Max" labelForId="max-input">
                    <input
                        id="max-input"
                        type="number"
                        value={max}
                        onChange={({ target }) => setMax(target.valueAsNumber || 0)}
                        autoComplete="off"
                    />
                </InputWrapper>

                <InputWrapper label="Result" labelForId={undefined}>
                    <div style={{ padding: "5px 0" }}>{result}</div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { clamp } from "@baggie/math";

const result = clamp(${input}, { min: ${min}, max: ${max} });
// result = ${result}
`}
            />
        </>
    );
};
