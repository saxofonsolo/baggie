import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { normalizeHexColor } from "../../convert/normalizeHexColor";
import { isColorBrighterThan } from "./isColorBrighterThan";

interface Props {
    colorA: string;
    colorB: string;
}

export const Example = (props: Props) => {
    const [colorA, setColorA] = useState(props.colorA);
    const [colorB, setColorB] = useState(props.colorB);

    const isBrighter = useMemo(() => isColorBrighterThan(colorA, colorB), [colorA, colorB]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Color A" labelForId="color-a-input">
                    <input
                        type="color"
                        value={normalizeHexColor(colorA).substring(0, 7)}
                        onChange={({ target }) => setColorA(target.value)}
                    />
                    <input
                        id="color-a-input"
                        value={colorA}
                        onChange={({ target }) => setColorA(target.value)}
                    />
                </InputWrapper>

                <InputWrapper label="Color B" labelForId="color-b-input">
                    <input
                        type="color"
                        value={normalizeHexColor(colorB).substring(0, 7)}
                        onChange={({ target }) => setColorB(target.value)}
                    />
                    <input
                        id="color-b-input"
                        value={colorB}
                        onChange={({ target }) => setColorB(target.value)}
                    />
                </InputWrapper>

                <InputWrapper label="Is A brighter than B" labelForId={undefined}>
                    <div style={{ padding: "5px" }}>{isBrighter ? "true" : "false"}</div>
                </InputWrapper>
            </div>

            <div
                style={{
                    position: "relative",
                    display: "inline-block",
                    marginTop: "25px",
                }}
            >
                <svg
                    height="100px"
                    width="100px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 31 31"
                    style={{ position: "absolute", zIndex: 0, opacity: isBrighter ? 0 : 0.25 }}
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
                        backgroundColor: colorA,
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        zIndex: 1,
                        border: "50px solid transparent",
                        borderRightColor: colorB,
                        borderBottomColor: colorB,
                    }}
                />
            </div>

            <Source
                dark
                code={`
import { isColorBrighterThan } from "@baggie/color";

const colorA = "${colorA}";
const colorB = "${colorB}";

const answer = isColorBrighterThan(colorA, colorB);
// answer = ${isBrighter ? "true" : "false"}
`}
            />
        </>
    );
};
