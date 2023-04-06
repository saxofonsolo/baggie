import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { normalizeHexColor } from "../../convert/normalizeHexColor";
import { getBrightness } from "./getBrightness";

interface Props {
    color: string;
}

export const Example = (props: Props) => {
    const [color, setColor] = useState(props.color);

    const brightness = useMemo(() => getBrightness(color), [color]);

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

                <InputWrapper label="Brightness" labelForId={undefined}>
                    <div style={{ padding: "5px" }}>{brightness}</div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { getBrightness } from "@baggie/color";

const color = "${color}";

const brightness = getBrightness(color);
// brightness = ${brightness}
`}
            />
        </>
    );
};
