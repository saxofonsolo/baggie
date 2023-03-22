import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { countDecimals } from "./countDecimals";

interface Props {
    defaultInput: string;
}

export const Example = (props: Props) => {
    const [input, setInput] = useState(props.defaultInput);

    const decimals = useMemo(() => countDecimals(input), [input]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Number" labelForId="number-input">
                    <input
                        id="number-input"
                        type="number"
                        value={input}
                        onChange={({ target }) => setInput(target.value)}
                    />
                </InputWrapper>

                <InputWrapper label="Decimals" labelForId={undefined}>
                    <div style={{ padding: "5px" }}>{isNaN(decimals) ? "Error" : decimals}</div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { countDecimals } from "@baggie/math";

const number = ${input};

const decimals = countDecimals(number);
// decimals = ${decimals}
`}
            />
        </>
    );
};
