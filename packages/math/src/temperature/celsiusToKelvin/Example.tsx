import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { celsiusToKelvin } from "./celsiusToKelvin";

interface Props {
    input: number;
}

export const Example = (props: Props) => {
    const [input, setInput] = useState(props.input);
    const output = useMemo(() => celsiusToKelvin(input), [input]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Celcius" labelForId="input-input">
                    <input
                        id="input-input"
                        type="number"
                        value={input}
                        onChange={({ target }) => setInput(target.valueAsNumber)}
                    />
                </InputWrapper>

                <InputWrapper label="Kelvin" labelForId={undefined}>
                    <div style={{ padding: "5px" }}>{isNaN(output) ? "Error" : output}</div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { celsiusToKelvin } from "@baggie/math";

const celsius = ${input};

const kelvin = celsiusToKelvin(celsius);
// kelvin = ${output}
`}
            />
        </>
    );
};
