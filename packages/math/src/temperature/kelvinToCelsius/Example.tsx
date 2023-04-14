import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { kelvinToCelsius } from "./kelvinToCelsius";

interface Props {
    input: number;
}

export const Example = (props: Props) => {
    const [input, setInput] = useState(props.input);
    const output = useMemo(() => kelvinToCelsius(input), [input]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Kelvin" labelForId="input-input">
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
import { kelvinToCelsius } from "@baggie/math";

const kelvin = ${input};

const celsius = kelvinToCelsius(celsius);
// celsius = ${output}
`}
            />
        </>
    );
};
