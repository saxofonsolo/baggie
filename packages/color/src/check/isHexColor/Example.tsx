import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { ColorViewer } from "../../_components/ColorViewer/ColorViewer";
import { ColorInput } from "../../_components/ColorInput/ColorInput";
import { isHexColor } from "./isHexColor";

interface Props {
    defaultInput: string;
}

export const Example = (props: Props) => {
    const [input, setInput] = useState(props.defaultInput);

    const checkResult = useMemo(() => isHexColor(input), [input]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <ColorInput label="Input" value={input} onChange={setInput} />

                <InputWrapper label="Is hex color" labelForId={undefined}>
                    <div style={{ padding: "5px" }}>{checkResult ? "true" : "false"}</div>
                </InputWrapper>
            </div>

            <div style={{ marginTop: "25px" }}>
                <ColorViewer color={input} />
            </div>

            <Source
                dark
                code={`
import { isHexColor } from "@baggie/color";

const input = "${input}";

const answer = isHexColor(input);
// answer = ${checkResult ? "true" : "false"}
`}
            />
        </>
    );
};
