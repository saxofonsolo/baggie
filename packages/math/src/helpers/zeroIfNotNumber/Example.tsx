import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { zeroIfNotNumber } from "./zeroIfNotNumber";

interface Props {
    defaultInput: string;
}

export const Example = (props: Props) => {
    const [input, setInput] = useState(props.defaultInput);

    const output = useMemo(() => zeroIfNotNumber(input), [input]);

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
                    <div style={{ padding: "5px" }}>{output}</div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { zeroIfNotNumber } from "@baggie/math";

const input = ${isNaN(input as unknown as number) ? `"${input}"` : input.trim() || "undefined"};

const output = zeroIfNotNumber(input);
// output = ${output}
`}
            />
        </>
    );
};
