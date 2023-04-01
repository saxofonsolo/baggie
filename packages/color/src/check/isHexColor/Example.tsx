import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { normalizeHexColor } from "../../convert/normalizeHexColor";
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
                <InputWrapper label="Input" labelForId="input-input">
                    <input
                        type="color"
                        value={normalizeHexColor(input).substring(0, 7)}
                        onChange={({ target }) => setInput(target.value)}
                    />
                    <input
                        id="input-input"
                        value={input}
                        onChange={({ target }) => setInput(target.value)}
                    />
                </InputWrapper>

                <InputWrapper label="Is hex color" labelForId={undefined}>
                    <div style={{ padding: "5px" }}>{checkResult ? "true" : "false"}</div>
                </InputWrapper>
            </div>

            <div
                style={{
                    display: "inline-block",
                    marginTop: "25px",
                    padding: "2px",
                    border: "2px dashed #900",
                }}
            >
                <svg
                    height="100px"
                    width="100px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 31 31"
                    style={{ position: "absolute", zIndex: 0, opacity: checkResult ? 0 : 0.25 }}
                >
                    <g transform="rotate(45 15.5 15.5)">
                        <rect x="15" y="0" width="1" height="31" />
                        <rect x="0" y="15" width="31" height="1" />
                    </g>
                </svg>
                <div
                    style={{
                        position: "relative",
                        zIndex: 1,
                        width: "100px",
                        height: "100px",
                        backgroundColor: checkResult ? input : "transparent",
                    }}
                />
            </div>

            <Source
                dark
                code={`
import { isHexColor } from "@baggie/math";

const input = "${input}";

const answer = isHexColor(input);
// answer = ${checkResult ? "true" : "false"}
`}
            />
        </>
    );
};
