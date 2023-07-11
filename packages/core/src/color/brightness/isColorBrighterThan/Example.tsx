import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { ColorViewer } from "../../_components/ColorViewer/ColorViewer";
import { ColorInput } from "../../_components/ColorInput/ColorInput";
import { isColorBrighterThan } from "./isColorBrighterThan";

interface Props {
    colorA: string;
    colorB: string;
}

export const Example = (props: Props) => {
    const [colorA, setColorA] = useState(props.colorA);
    const [colorB, setColorB] = useState(props.colorB);

    const isBrighter = useMemo(() => isColorBrighterThan(colorA, colorB), [colorA, colorB]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <ColorInput label="Color A" value={colorA} onChange={setColorA} />
                <ColorInput label="Color B" value={colorB} onChange={setColorB} />

                <InputWrapper label="Is A brighter than B" labelForId={undefined}>
                    <div style={{ padding: "5px 0" }}>{isBrighter ? "true" : "false"}</div>
                </InputWrapper>
            </div>

            <div style={{ marginTop: "25px" }}>
                <ColorViewer color={colorA} splitColor={colorB} />
            </div>

            <Source
                dark
                code={`
import { isColorBrighterThan } from "@baggie/core";

const colorA = "${colorA}";
const colorB = "${colorB}";

const answer = isColorBrighterThan(colorA, colorB);
// answer = ${isBrighter ? "true" : "false"}
`}
            />
        </>
    );
};
