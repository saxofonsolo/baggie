import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { roemerToCelsius } from "./roemerToCelsius";

interface Props {
    input: number;
}

export const Example = (props: Props) => {
    const [input, setInput] = useState(props.input);
    const output = useMemo(() => roemerToCelsius(input), [input]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Roemer" labelForId="input-input">
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
import { roemerToCelsius } from "@baggie/math";

const roemer = ${input};

const celsius = roemerToCelsius(celsius);
// celsius = ${output}
`}
            />
        </>
    );
};
