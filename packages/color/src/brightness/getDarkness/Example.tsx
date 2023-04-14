import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { ColorInput } from "../../_components/ColorInput/ColorInput";
import { getDarkness } from "./getDarkness";

interface Props {
    color: string;
}

export const Example = (props: Props) => {
    const [color, setColor] = useState(props.color);

    const darkness = useMemo(() => getDarkness(color), [color]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <ColorInput label="Color" value={color} onChange={setColor} />

                <InputWrapper label="Darkness" labelForId={undefined}>
                    <div style={{ padding: "5px 0" }}>{darkness}</div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { getDarkness } from "@baggie/color";

const color = "${color}";

const darkness = getDarkness(color);
// darkness = ${darkness}
`}
            />
        </>
    );
};
