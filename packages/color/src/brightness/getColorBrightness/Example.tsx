import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { ColorInput } from "../../_components/ColorInput/ColorInput";
import { getColorBrightness } from "./getColorBrightness";

interface Props {
    color: string;
}

export const Example = (props: Props) => {
    const [color, setColor] = useState(props.color);

    const brightness = useMemo(() => getColorBrightness(color), [color]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <ColorInput label="Color" value={color} onChange={setColor} />

                <InputWrapper label="Brightness" labelForId={undefined}>
                    <div style={{ padding: "5px 0" }}>{brightness}</div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { getColorBrightness } from "@baggie/color";

const color = "${color}";

const brightness = getColorBrightness(color);
// brightness = ${brightness}
`}
            />
        </>
    );
};
