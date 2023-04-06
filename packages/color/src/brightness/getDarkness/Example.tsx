import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { normalizeHexColor } from "../../convert/normalizeHexColor";
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

                <InputWrapper label="Darkness" labelForId={undefined}>
                    <div style={{ padding: "5px" }}>{darkness}</div>
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
