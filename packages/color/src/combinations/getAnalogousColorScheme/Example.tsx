import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { normalizeHexColor } from "../../convert/normalizeHexColor";
import { getAnalogousColorScheme } from "./getAnalogousColorScheme";

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
            return getAnalogousColorScheme(color, count, steps);
        } catch (err) {
            return [];
        }
    }, [color, count, steps]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Color" labelForId="color-input">
                    <input
                        type="color"
                        value={normalizeHexColor(color).substring(0, 7)}
                        onChange={({ target }) => setColor(target.value)}
                    />
                    <input
                        id="color-input"
                        value={color}
                        onChange={({ target }) => setColor(target.value)}
                    />
                </InputWrapper>

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
                    <div
                        key={c}
                        style={{
                            position: "relative",
                            zIndex: 1,
                            width: "100px",
                            height: "100px",
                            backgroundColor: c,
                        }}
                    />
                ))}
            </div>

            <Source
                dark
                code={`
import { getAnalogousColorScheme } from "@baggie/color";

const color = "${color}";
const count = ${count};
const steps = ${steps};

const scheme = getAnalogousColorScheme(color, count, steps);
/*
scheme = ${JSON.stringify(scheme, null, 4)}
*/
`}
            />
        </>
    );
};
