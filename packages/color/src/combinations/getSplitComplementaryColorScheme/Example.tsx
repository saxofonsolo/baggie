import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { normalizeHexColor } from "../../convert/normalizeHexColor";
import { getSplitComplementaryColorScheme } from "./getSplitComplementaryColorScheme";

interface Props {
    color: string;
}

export const Example = (props: Props) => {
    const [color, setColor] = useState(props.color);

    const scheme = useMemo(() => {
        try {
            return getSplitComplementaryColorScheme(color);
        } catch (err) {
            return [];
        }
    }, [color]);

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
            </div>

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
import { getSplitComplementaryColorScheme } from "@baggie/color";

const color = "${color}";

const scheme = getSplitComplementaryColorScheme(color);
/*
scheme = ${JSON.stringify(scheme, null, 4)}
*/
`}
            />
        </>
    );
};
