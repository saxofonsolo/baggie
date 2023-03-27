import React, { useMemo, useState } from "react";
import { InputWrapper } from "@baggie/react";
import { Source } from "@storybook/blocks";
import { getCircleArea } from "./getCircleArea";

interface Props {
    radius: number;
}

export const Example = (props: Props) => {
    const [radius, setRadius] = useState(props.radius);

    const surfaceArea = useMemo(() => getCircleArea(radius || 0), [radius]);

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

                <InputWrapper label="Surface area" labelForId={undefined}>
                    <div style={{ padding: "5px" }}>
                        {isNaN(surfaceArea) ? "Error" : surfaceArea}
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
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: "2px",
                        borderRadius: "50%",
                        background: `repeating-linear-gradient(
                            -45deg,
                            #900,
                            #900 2px,
                            #FC0 2px,
                            #FC0 8px
                        )`,
                    }}
                />
                <div />
                <div
                    style={{
                        top: "-0.75em",
                        position: "relative",
                        borderBottom: "1px solid #900",
                    }}
                >
                    <div style={{ lineHeight: "1.5em", padding: "0 10px", background: "#FC0" }}>
                        r = {radius || 0}
                    </div>
                </div>
            </div>

            <Source
                dark
                code={`
import { getCircleArea } from "@baggie/math";

const radius = ${radius || 0};

const surfaceArea = getCircleArea(radius);
// surfaceArea = ${surfaceArea}
`}
            />
        </>
    );
};
