import React, { useMemo, useState } from "react";
import { InputWrapper } from "@baggie/react";
import { Source } from "@storybook/blocks";
import { getHalfLifeDecay } from "./getHalfLifeDecay";

interface Props {
    initialValue: number;
    timePassed: number;
    halfLife: number;
}

export const Example = (props: Props) => {
    const [initialValue, setInitialValue] = useState(props.initialValue);
    const [timePassed, setTimePassed] = useState(props.timePassed);
    const [halfLife, setHalfLife] = useState(props.halfLife);

    const reducedValue = useMemo(
        () => getHalfLifeDecay(initialValue, timePassed || 0, halfLife || 0),
        [initialValue, timePassed, halfLife],
    );

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Initial value" labelForId="value-input">
                    <input
                        id="value-input"
                        type="number"
                        value={initialValue}
                        onChange={({ target }) => setInitialValue(target.valueAsNumber)}
                    />
                </InputWrapper>

                <InputWrapper label="Time passed" labelForId="time-passed-input">
                    <input
                        id="time-passed-input"
                        type="number"
                        value={timePassed}
                        onChange={({ target }) => setTimePassed(target.valueAsNumber)}
                    />
                </InputWrapper>

                <InputWrapper label="Half life" labelForId="half-life-input">
                    <input
                        id="half-life-input"
                        type="number"
                        value={halfLife}
                        onChange={({ target }) => setHalfLife(target.valueAsNumber)}
                    />
                </InputWrapper>

                <InputWrapper label="Reduced value" labelForId={undefined}>
                    <div style={{ padding: "5px 0" }}>
                        {isNaN(reducedValue) ? "Error" : reducedValue}
                    </div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { getHalfLifeDecay } from "@baggie/core";

const initialValue = ${initialValue || 0};
const timePassed = ${timePassed || 0};
const halfLife = ${halfLife || 0};

const reducedValue = getHalfLifeDecay(initialValue, timePassed, halfLife);
// reducedValue = ${reducedValue};
`}
            />
        </>
    );
};
