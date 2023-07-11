import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { ColorViewer } from "../../_components/ColorViewer/ColorViewer";
import { ColorInput } from "../../_components/ColorInput/ColorInput";
import { getColorSchemeAnalogous } from "./getColorSchemeAnalogous";

interface Props {
    color: string;
    count: number;
    steps: number;
}

export const Example = (props: Props) => {
    const [color, setColor] = useState(props.color);
    const [count, setCount] = useState(props.count);
    const [steps, setSteps] = useState(props.steps);

    const scheme = useMemo(() => {
        try {
            return getColorSchemeAnalogous(color, count, steps);
        } catch (err) {
            return [];
        }
    }, [color, count, steps]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <ColorInput label="Color" value={color} onChange={setColor} />

                <InputWrapper label="Count" labelForId="count-input">
                    <input
                        id="count-input"
                        type="number"
                        value={count}
                        onChange={({ target }) => setCount(target.valueAsNumber)}
                    />
                </InputWrapper>

                <InputWrapper
                    label="Steps"
                    labelForId="steps-input"
                    helperText={`Should be at least be the same as "count"`}
                >
                    <input
                        id="steps-input"
                        type="number"
                        value={steps}
                        onChange={({ target }) => setSteps(target.valueAsNumber)}
                    />
                </InputWrapper>
            </div>

            <div
                key={`${color}--${count}--${steps}`}
                style={{
                    marginTop: "25px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                }}
            >
                {scheme.map((c) => (
                    <ColorViewer key={c} color={c} />
                ))}
            </div>

            <Source
                dark
                code={`
import { getColorSchemeAnalogous } from "@baggie/core";

const color = "${color}";
const count = ${count};
const steps = ${steps};

const scheme = getColorSchemeAnalogous(color, count, steps);
/*
scheme = ${JSON.stringify(scheme, null, 4)}
*/
`}
            />
        </>
    );
};
