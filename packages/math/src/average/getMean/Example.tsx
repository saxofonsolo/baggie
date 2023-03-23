import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { getMean } from "./getMean";

interface Props {
    defaultInput: number[];
}

export const Example = (props: Props) => {
    const [input, setInput] = useState(props.defaultInput.join(", "));

    const { numbers, result } = useMemo(() => {
        const numbers = input
            .split(/\s*,\s*/)
            .filter((value) => value.length)
            .map((string) => (string.match(/^-?[0-9]*\.?[0-9]*$/) ? parseFloat(string) : NaN));
        return { numbers, result: getMean(numbers) };
    }, [input]);

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

                <InputWrapper label="Mean" labelForId={undefined}>
                    <div style={{ padding: "5px" }}>{isNaN(result) ? "Error" : result}</div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { getMean } from "@baggie/math";

const numbers = [${numbers.join(", ")}];

const mean = getMean(numbers);
// mean = ${result}
`}
            />
        </>
    );
};
