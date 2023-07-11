import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { getPercentageBetween } from "./getPercentageBetween";

interface Props {
    from: number;
    to: number;
    position: number;
}

export const Example = (props: Props) => {
    const [from, setFrom] = useState(props.from);
    const [to, setTo] = useState(props.to);
    const [position, setPosition] = useState(props.position);

    const result = useMemo(
        () => getPercentageBetween(position, { from, to }),
        [from, to, position],
    );

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Position" labelForId="position-input">
                    <input
                        id="position-input"
                        type="number"
                        value={position}
                        onChange={({ target }) => setPosition(target.valueAsNumber || 0)}
                    />
                </InputWrapper>

                <InputWrapper label="From" labelForId="from-input">
                    <input
                        id="from-input"
                        type="number"
                        value={from}
                        onChange={({ target }) => setFrom(target.valueAsNumber || 0)}
                    />
                </InputWrapper>

                <InputWrapper label="To" labelForId="to-input">
                    <input
                        id="to-input"
                        type="number"
                        value={to}
                        onChange={({ target }) => setTo(target.valueAsNumber || 0)}
                    />
                </InputWrapper>

                <InputWrapper label="Percentage" labelForId={undefined}>
                    <div style={{ padding: "5px 0" }}>{result}</div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { getPercentageBetween } from "@baggie/core";

const percentage = getPercentageBetween(${position}, { from: ${from}, to: ${to} });
// percentage = ${result}
`}
            />
        </>
    );
};
