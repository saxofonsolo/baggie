import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { celsiusToRankine } from "./celsiusToRankine";

interface Props {
    input: number;
}

export const Example = (props: Props) => {
    const [input, setInput] = useState(props.input);
    const output = useMemo(() => celsiusToRankine(input), [input]);

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

                <InputWrapper label="Rankine" labelForId={undefined}>
                    <div style={{ padding: "5px" }}>{isNaN(output) ? "Error" : output}</div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { celsiusToRankine } from "@baggie/math";

const celsius = ${input};

const rankine = celsiusToRankine(celsius);
// rankine = ${output}
`}
            />
        </>
    );
};
