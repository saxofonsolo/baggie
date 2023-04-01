import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { addNumbers } from "./addNumbers";

interface Props {
    defaultInput: number[];
}

export const Example = (props: Props) => {
    const [input, setInput] = useState(props.defaultInput.join(", "));

    const { numbers, total } = useMemo(() => {
        const numbers = input
            .split(/\s*,\s*/)
            .filter((value) => value.length)
            .map((string) => (string.match(/^-?[0-9]*\.?[0-9]*$/) ? parseFloat(string) : NaN));
        return { numbers, total: addNumbers(numbers) };
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
                    <div style={{ padding: "5px" }}>{isNaN(total) ? "Error" : total}</div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { addNumbers } from "@baggie/math";

const numbers = [${numbers.join(", ")}];

const total = addNumbers(numbers);
// total = ${total}
`}
            />
        </>
    );
};
