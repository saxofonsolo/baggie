import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { getPositionBetween } from "./getPositionBetween";

interface Props {
    from: number;
    to: number;
    percentage: number;
}

export const Example = (props: Props) => {
    const [from, setFrom] = useState(props.from);
    const [to, setTo] = useState(props.to);
    const [percentage, setPercentage] = useState(props.percentage);

    const result = useMemo(() => getPositionBetween(from, to, percentage), [from, to, percentage]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
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

                <InputWrapper label="Percentage" labelForId="percentage-input">
                    <input
                        id="percentage-input"
                        type="number"
                        value={percentage}
                        onChange={({ target }) => setPercentage(target.valueAsNumber || 0)}
                    />
                </InputWrapper>

                <InputWrapper label="Position" labelForId={undefined}>
                    <div style={{ padding: "5px 0" }}>{result}</div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { getPositionBetween } from "@baggie/math";

const from = ${from};
const to = ${to};
const percentage = ${percentage};

const position = getPositionBetween(from, to, percentage);
// position = ${result}
`}
            />
        </>
    );
};
