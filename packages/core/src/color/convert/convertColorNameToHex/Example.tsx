import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { ColorViewer } from "../../_components/ColorViewer/ColorViewer";
import { COLOR_NAMES, convertColorNameToHex } from "./convertColorNameToHex";

interface Props {
    colorName: string;
}

export const Example = (props: Props) => {
    const [colorName, setColorName] = useState(props.colorName);

    const hex = useMemo(() => convertColorNameToHex(colorName), [colorName]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Color name" labelForId="color-name-input">
                    <input
                        id="color-name-input"
                        value={colorName}
                        onChange={({ target }) => setColorName(target.value)}
                        list="color-names"
                    />
                    <datalist id="color-names">
                        {Object.keys(COLOR_NAMES).map((name) => (
                            <option key={name}>{name}</option>
                        ))}
                    </datalist>
                </InputWrapper>
            </div>

            <div style={{ marginTop: "25px" }}>
                <ColorViewer color={hex} />
            </div>

            <Source
                dark
                code={`
import { convertColorNameToHex } from "@baggie/core";

const colorName = "${colorName}";

const hex = convertColorNameToHex(colorName);
// hex = ${hex ? `"${hex as string}"` : "undefined"}
`}
            />
        </>
    );
};
