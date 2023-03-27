import React, { useMemo, useState } from "react";
import { InputWrapper } from "@baggie/react";
import { Source } from "@storybook/blocks";
import { getPointsOnCircle } from "./getPointsOnCircle";

interface Props {
    radius: number;
    numberOfPoints: number;
    offset: number;
}

export const Example = (props: Props) => {
    const [radius, setRadius] = useState(props.radius);
    const [numberOfPoints, setNumberOfPoints] = useState(props.numberOfPoints);
    const [offset, setOffset] = useState(props.offset);

    const points = useMemo(
        () =>
            getPointsOnCircle({
                radius: radius || 1,
                numberOfPoints: Math.min(numberOfPoints || 0, 30),
                offset: offset || 0,
            }),
        [radius, numberOfPoints, offset],
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

                <InputWrapper label="Number of points" labelForId="points-input">
                    <input
                        id="points-input"
                        type="number"
                        max={30}
                        value={numberOfPoints}
                        onChange={({ target }) => setNumberOfPoints(target.valueAsNumber)}
                    />
                </InputWrapper>

                <InputWrapper label="Offset" labelForId="offset-input">
                    <input
                        id="offset-input"
                        type="number"
                        value={offset}
                        onChange={({ target }) => setOffset(target.valueAsNumber)}
                    />
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
                {points.map((point, index) => (
                    <div
                        key={index}
                        style={{
                            position: "absolute",
                            top: "0%",
                            left: "0%",
                            width: "100%",
                            height: "100%",
                            transform: `rotate(${point.degrees}deg) translateY(-50%)`,
                            transition: "all 0.4s ease-out",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: "calc(50% - 4px)",
                                left: "calc(50% - 3px)",
                                width: "6px",
                                height: "2px",
                                background: "#900",
                            }}
                        />
                    </div>
                ))}
                <div />
                <div
                    style={{
                        top: "-0.75em",
                        padding: "0 10px",
                        position: "relative",
                        borderBottom: "1px solid #900",
                    }}
                >
                    <div style={{ lineHeight: "1.5em" }}>r = {radius || 1}</div>
                </div>
            </div>

            <Source
                dark
                code={`
import { getPointsOnCircle } from "@baggie/math";

const radius = ${radius || 1};
const numberOfPoints = ${Math.min(numberOfPoints || 0, 30)};
const offset = ${offset || 0};

const points = getPointsOnCircle({ radius, numberOfPoints, offset });
/*
points = ${JSON.stringify(points.slice(0, 5), null, 4).replace(
                    /}$/m,
                    numberOfPoints > 5 ? "},\n    ..." : "}",
                )}
*/
`}
            />
        </>
    );
};
