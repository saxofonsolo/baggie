import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { ColorInput } from "../../_components/ColorInput/ColorInput";
import { normalizeHexColor } from "./normalizeHexColor";

interface Props {
    hex: string;
}

export const Example = (props: Props) => {
    const [hex, setHex] = useState(props.hex);

    const normalized = useMemo(() => normalizeHexColor(hex), [hex]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <ColorInput label="Hex color" value={hex} onChange={setHex} />

                <InputWrapper label="Normalized" labelForId={undefined}>
                    {normalized ? normalized : "undefined"}
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { normalizeHexColor } from "@baggie/core";

const hex = "${hex}";

const normalized = normalizeHexColor(hex);
// normalized = ${normalized ? `"${normalized}"` : "undefined"}
`}
            />
        </>
    );
};
