import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { getRange } from "./getRange";

interface Props {
    numbers: number[];
}

export const Example = (props: Props) => {
    const [input, setInput] = useState(props.numbers.join(", "));

    const { numbers, range } = useMemo(() => {
        const numbers = input
            .split(/\s*,\s*/)
            .filter((value) => value.length)
            .map((string) => (string.match(/^-?[0-9]*\.?[0-9]*$/) ? parseFloat(string) : NaN));
        return { numbers, range: getRange(numbers) };
    }, [input]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Input" labelForId="input-input">
                    <input
                        id="input-input"
                        value={input}
                        onChange={({ target }) => setInput(target.value)}
                        spellCheck={false}
                    />
                </InputWrapper>

                <InputWrapper label="Output" labelForId={undefined}>
                    <div style={{ padding: "5px 0" }}>{isNaN(range) ? "Error" : range}</div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { getRange } from "@baggie/core";

const numbers = [${numbers.join(", ")}];

const range = getRange(numbers);
// range = ${range}
`}
            />
        </>
    );
};
