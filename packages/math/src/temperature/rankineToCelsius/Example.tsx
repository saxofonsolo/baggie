import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { rankineToCelsius } from "./rankineToCelsius";

interface Props {
    input: number;
}

export const Example = (props: Props) => {
    const [input, setInput] = useState(props.input);
    const output = useMemo(() => rankineToCelsius(input), [input]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Rankine" labelForId="input-input">
                    <input
                        id="input-input"
                        type="number"
                        value={input}
                        onChange={({ target }) => setInput(target.valueAsNumber)}
                    />
                </InputWrapper>

                <InputWrapper label="Celsius" labelForId={undefined}>
                    <div style={{ padding: "5px 0" }}>{isNaN(output) ? "Error" : output}</div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { rankineToCelsius } from "@baggie/math";

const rankine = ${input};

const celsius = rankineToCelsius(celsius);
// celsius = ${output}
`}
            />
        </>
    );
};
