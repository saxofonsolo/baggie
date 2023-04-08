import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { ColorViewer } from "../../_components/ColorViewer/ColorViewer";
import { ColorInput } from "../../_components/ColorInput/ColorInput";
import { screenColors } from "./screenColors";

interface Props {
    colorA: string;
    colorB: string;
}

export const Example = (props: Props) => {
    const [colorA, setColorA] = useState(props.colorA);
    const [colorB, setColorB] = useState(props.colorB);

    const mixed = useMemo(() => screenColors(colorA, colorB), [colorA, colorB]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <ColorInput label="Color A" value={colorA} onChange={setColorA} />
                <ColorInput label="Color B" value={colorB} onChange={setColorB} />
            </div>

            <div style={{ marginTop: "25px" }}>
                <ColorViewer color={mixed} />
            </div>

            <Source
                dark
                code={`
import { screenColors } from "@baggie/color";

const colorA = "${colorA}";
const colorB = "${colorB}";

const mixed = screenColors(colorA, colorB);
// mixed = ${mixed ? `"${mixed}"` : "undefined"}
`}
            />
        </>
    );
};
