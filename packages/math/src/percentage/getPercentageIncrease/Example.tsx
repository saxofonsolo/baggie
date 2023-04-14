import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { getPercentageIncrease } from "./getPercentageIncrease";

interface Props {
    from: number;
    to: number;
}

export const Example = (props: Props) => {
    const [from, setFrom] = useState(props.from);
    const [to, setTo] = useState(props.to);
    const [percentageAsDecimal, setPercentageAsDecimal] = useState(true);

    const result = useMemo(
        () => getPercentageIncrease(from, to, percentageAsDecimal),
        [from, to, percentageAsDecimal],
    );

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

                <InputWrapper label="Percentage" labelForId={undefined}>
                    <div style={{ padding: "5px 0" }}>{result}</div>
                </InputWrapper>
            </div>

            <label>
                <input
                    type="checkbox"
                    checked={percentageAsDecimal}
                    onChange={() => setPercentageAsDecimal((current) => !current)}
                />
                Percentage as decimal
            </label>

            <Source
                dark
                code={`
import { setPercentageAsDecimal } from "@baggie/math";

const from = ${from};
const to = ${to};

const percentage = setPercentageAsDecimal(from, to${percentageAsDecimal ? "" : ", false"});
// percentage = ${result}${percentageAsDecimal ? ` (${result * 100}%)` : ""}
`}
            />
        </>
    );
};
