import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { getAntiMode } from "./getAntiMode";

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
        return { numbers, result: getAntiMode(numbers) };
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

                <InputWrapper label="Output" labelForId={undefined}>
                    <div style={{ padding: "5px 0" }}>
                        {result ? `[${result.numbers.join(", ")}]` : "Error"}
                    </div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { getAntiMode } from "@baggie/math";

const numbers = [${numbers.join(", ")}];

const result = getAntiMode(numbers);
/*
result = ${JSON.stringify(result, null, 4)}
*/
`}
            />
        </>
    );
};
