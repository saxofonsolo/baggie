import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { ColorViewer } from "../../_components/ColorViewer/ColorViewer";
import { ColorInput } from "../../_components/ColorInput/ColorInput";
import { mixColors } from "./mixColors";

interface Props {
    colorA: string;
    colorB: string;
    weight: number;
}

export const Example = (props: Props) => {
    const [colorA, setColorA] = useState(props.colorA);
    const [colorB, setColorB] = useState(props.colorB);
    const [weight, setWeight] = useState(props.weight);

    const mixed = useMemo(() => mixColors(colorA, colorB, weight), [colorA, colorB, weight]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <ColorInput label="Color A" value={colorA} onChange={setColorA} />
                <ColorInput label="Color B" value={colorB} onChange={setColorB} />

                <InputWrapper label="Weight" labelForId="weight-input">
                    <input
                        id="weight-input"
                        type="range"
                        value={weight}
                        min={0}
                        max={1}
                        step={0.01}
                        onChange={({ target }) => setWeight(target.valueAsNumber)}
                    />{" "}
                    {weight.toFixed(2)}
                </InputWrapper>
            </div>

            <div style={{ marginTop: "25px" }}>
                <ColorViewer color={mixed} />
            </div>

            <Source
                dark
                code={`
import { mixColors } from "@baggie/color";

const colorA = "${colorA}";
const colorB = "${colorB}";
const weight = ${weight};

const mixed = mixColors(colorA, colorB, weight);
// mixed = ${mixed ? `"${mixed}"` : "undefined"}
`}
            />
        </>
    );
};
