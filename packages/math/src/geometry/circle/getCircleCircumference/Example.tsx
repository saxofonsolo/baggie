import React, { useMemo, useState } from "react";
import { InputWrapper } from "@baggie/react";
import { Source } from "@storybook/blocks";
import { getCircleCircumference } from "./getCircleCircumference";

interface Props {
    radius: number;
}

export const Example = (props: Props) => {
    const [radius, setRadius] = useState(props.radius);

    const circumference = useMemo(() => getCircleCircumference(radius || 0), [radius]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Radius" labelForId="radius-input">
                    <input
                        id="radius-input"
                        type="number"
                        value={radius}
                        onChange={({ target }) => setRadius(target.valueAsNumber)}
                    />
                </InputWrapper>

                <InputWrapper label="Circumference" labelForId={undefined}>
                    <div style={{ padding: "5px 0" }}>
                        {isNaN(circumference) ? "Error" : circumference}
                    </div>
                </InputWrapper>
            </div>

            <div
                style={{
                    aspectRatio: 1,
                    background: "#FC0",
                    marginTop: "20px",
                    borderRadius: "50%",
                    position: "relative",
                    display: "inline-grid",
                    gridTemplateColumns: "1fr 1fr",
                    alignItems: "center",
                    pointerEvents: "none",
                    userSelect: "none",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: "-4px",
                        borderRadius: "50%",
                        border: "2px dashed #900",
                    }}
                />
                <div />
                <div
                    style={{
                        top: "-0.75em",
                        padding: "0 10px",
                        position: "relative",
                        borderBottom: "1px solid #900",
                    }}
                >
                    <div style={{ lineHeight: "1.5em" }}>r = {radius || 0}</div>
                </div>
            </div>

            <Source
                dark
                code={`
import { getCircleCircumference } from "@baggie/math";

const radius = ${radius || 0};

const circumference = getCircleCircumference(radius);
// circumference = ${circumference}
`}
            />
        </>
    );
};
