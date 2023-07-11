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
    const [min, setMin] = useState<number | undefined>(props.min);
    const [max, setMax] = useState<number | undefined>(props.max);

    const result = useMemo(() => clamp(input, { min, max }), [input, min, max]);

    const settings = [
        typeof min === "number" ? `min: ${min}` : "",
        typeof max === "number" ? `max: ${max}` : "",
    ]
        .filter((x) => x)
        .join(", ");

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
                        onChange={({ target }) =>
                            setMin(isNaN(target.valueAsNumber) ? undefined : target.valueAsNumber)
                        }
                        autoComplete="off"
                    />
                </InputWrapper>

                <InputWrapper label="Max" labelForId="max-input">
                    <input
                        id="max-input"
                        type="number"
                        value={max}
                        onChange={({ target }) =>
                            setMax(isNaN(target.valueAsNumber) ? undefined : target.valueAsNumber)
                        }
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
import { clamp } from "@baggie/core";

const result = clamp(${input}, { ${settings} });
// result = ${result}
`}
            />
        </>
    );
};
