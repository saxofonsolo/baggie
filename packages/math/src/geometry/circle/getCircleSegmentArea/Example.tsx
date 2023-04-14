import React, { useMemo, useState } from "react";
import { InputWrapper } from "@baggie/react";
import { Source } from "@storybook/blocks";
import { getPercentage } from "../../../percentage/getPercentage/getPercentage";
import { getCircleSegmentArea } from "./getCircleSegmentArea";

interface Props {
    radius: number;
    height: number;
}

export const Example = (props: Props) => {
    const [radius, setRadius] = useState(props.radius);
    const [height, setHeight] = useState(props.height);

    const surfaceArea = useMemo(
        () => getCircleSegmentArea(radius || 0, height || 0),
        [radius, height],
    );

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

                <InputWrapper label="Height" labelForId="height-input">
                    <input
                        id="height-input"
                        type="number"
                        value={height}
                        onChange={({ target }) => setHeight(target.valueAsNumber)}
                    />
                </InputWrapper>

                <InputWrapper label="Surface area" labelForId={undefined}>
                    <div style={{ padding: "5px 0" }}>
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
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background: isNaN(surfaceArea)
                                ? "#900"
                                : `repeating-linear-gradient(-45deg, #900, #900 2px, #FC0 2px, #FC0 8px)`,
                            transform: `translateY(${
                                isNaN(surfaceArea)
                                    ? 0
                                    : 100 -
                                      getPercentage(
                                          {
                                              part: height,
                                              whole: radius * 2,
                                          },
                                          false,
                                      )
                            }%)`,
                            transition: isNaN(surfaceArea) ? "none" : "transform 0.4s ease-out",
                        }}
                    />
                </div>
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
import { getCircleSegmentArea } from "@baggie/math";

const radius = ${radius || 0};
const segmentHeight = ${height || 0};

const surfaceArea = getCircleSegmentArea(radius, segmentHeight);
// surfaceArea = ${surfaceArea}
`}
            />
        </>
    );
};
