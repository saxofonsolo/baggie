import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { ColorViewer } from "../../_components/ColorViewer/ColorViewer";
import { ColorInput } from "../../_components/ColorInput/ColorInput";
import { getColorSchemeTriadic } from "./getColorSchemeTriadic";

interface Props {
    color: string;
}

export const Example = (props: Props) => {
    const [color, setColor] = useState(props.color);

    const scheme = useMemo(() => {
        try {
            return getColorSchemeTriadic(color);
        } catch (err) {
            return [];
        }
    }, [color]);

    return (
        <>
            <ColorInput label="Color" value={color} onChange={setColor} />

            <div
                key={color}
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
import { getColorSchemeTriadic } from "@baggie/color";

const color = "${color}";

const scheme = getColorSchemeTriadic(color);
/*
scheme = ${JSON.stringify(scheme, null, 4)}
*/
`}
            />
        </>
    );
};
