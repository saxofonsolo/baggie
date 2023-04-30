import React, { useMemo, useState } from "react";
import { InputWrapper } from "@baggie/react";
import { Source } from "@storybook/blocks";
import { CoordinatesXY } from "../../_interfaces/coordinatesXY.interface";
import { ceilToMultipleOf } from "../../../rounding/ceilToMultipleOf/ceilToMultipleOf";
import { floorToMultipleOf } from "../../../rounding/floorToMultipleOf/floorToMultipleOf";
import { getPercentageBetween } from "../../../percentage/getPercentageBetween/getPercentageBetween";
import { getPositionBetween } from "../../../percentage/getPositionBetween/getPositionBetween";
import { getPercentage } from "../../../percentage/getPercentage/getPercentage";
import { getDistance } from "../../distance/getDistance";
import { getAngle } from "./getAngle";

interface Props {
    from: CoordinatesXY;
    to: CoordinatesXY;
}

export const Example = (props: Props) => {
    const [fromX, setFromX] = useState(props.from.x);
    const [fromY, setFromY] = useState(props.from.y);
    const [toX, setToX] = useState(props.to.x);
    const [toY, setToY] = useState(props.to.y);
    const [offset, setOffset] = useState(0);
    const [clockwise, setClockwise] = useState(false);

    const angle = useMemo(
        () => getAngle({ x: fromX, y: fromY }, { x: toX, y: toY }, { offset, clockwise }),
        [fromX, fromY, toX, toY, offset, clockwise],
    );

    const csXMin = floorToMultipleOf(Math.min(fromY, toY, fromX, toX) - 20, 20);
    const csXMax = ceilToMultipleOf(Math.max(fromY, toY, fromX, toX) + 20, 20);
    const csYMin = floorToMultipleOf(Math.min(fromY, toY, fromX, toX) - 20, 20);
    const csYMax = ceilToMultipleOf(Math.max(fromY, toY, fromX, toX) + 20, 20);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <fieldset>
                    <legend>From</legend>

                    <InputWrapper label="X" labelForId="from-x-input">
                        <input
                            id="from-x-input"
                            value={fromX}
                            type="number"
                            onChange={({ target }) => setFromX(target.valueAsNumber || 0)}
                        />
                    </InputWrapper>

                    <InputWrapper label="Y" labelForId="from-y-input">
                        <input
                            id="from-y-input"
                            value={fromY}
                            type="number"
                            onChange={({ target }) => setFromY(target.valueAsNumber || 0)}
                        />
                    </InputWrapper>
                </fieldset>

                <fieldset>
                    <legend>To</legend>

                    <InputWrapper label="X" labelForId="to-x-input">
                        <input
                            id="to-x-input"
                            value={toX}
                            type="number"
                            onChange={({ target }) => setToX(target.valueAsNumber || 0)}
                        />
                    </InputWrapper>

                    <InputWrapper label="Y" labelForId="to-y-input">
                        <input
                            id="to-y-input"
                            value={toY}
                            type="number"
                            onChange={({ target }) => setToY(target.valueAsNumber || 0)}
                        />
                    </InputWrapper>
                </fieldset>

                <InputWrapper label="Offset" labelForId="offset-input">
                    <input
                        id="offset-input"
                        value={offset}
                        type="number"
                        onChange={({ target }) => setOffset(target.valueAsNumber || 0)}
                    />
                </InputWrapper>

                <InputWrapper label="Angle" labelForId={undefined}>
                    <div style={{ padding: "5px 0" }}>{angle}</div>
                </InputWrapper>
            </div>

            <label>
                <input
                    type="checkbox"
                    checked={clockwise}
                    onChange={() => setClockwise((current) => !current)}
                />{" "}
                Clockwise
            </label>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "min-content 1fr",
                    gridTemplateRows: "1fr min-content",
                    marginTop: "20px",
                    pointerEvents: "none",
                    userSelect: "none",
                }}
            >
                <div
                    style={{
                        paddingRight: "5px",
                        textAlign: "right",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <div style={{ transform: "translateY(-0.5em)" }}>{csYMax}</div>
                    <div>{getPositionBetween(csYMax, csYMin, 0.5)}</div>
                    <div style={{ transform: "translateY(0.5em)" }}>{csYMin}</div>
                </div>
                <div
                    style={{
                        background: "#FC0",
                        boxShadow: "0 0 0 1px #FC0",
                        width: "200px",
                        height: "200px",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: `${
                                100 -
                                getPercentageBetween(fromY, { from: csYMin, to: csYMax }) * 100
                            }%`,
                            left: `${
                                getPercentageBetween(fromX, { from: csXMin, to: csXMax }) * 100
                            }%`,
                            width: `${
                                getPercentage({
                                    part: getDistance({ x: fromX, y: fromY }, { x: toX, y: toY }),
                                    whole: getDistance(
                                        { x: csXMin, y: csYMin },
                                        { x: csXMax, y: csYMax },
                                    ),
                                }) *
                                100 *
                                Math.sqrt(2) *
                                2
                            }%`,
                            height: `${
                                getPercentage({
                                    part: getDistance({ x: fromX, y: fromY }, { x: toX, y: toY }),
                                    whole: getDistance(
                                        { x: csXMin, y: csYMin },
                                        { x: csXMax, y: csYMax },
                                    ),
                                }) *
                                100 *
                                Math.sqrt(2) *
                                2
                            }%`,
                            transform: "translate(-50%, -50%)",
                            backgroundImage: `conic-gradient(from ${
                                clockwise ? offset + (270 - angle) : -90 - offset
                            }deg, #fff ${angle}deg, #fff5 ${angle}deg)`,
                            borderRadius: "50%",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            left: "50%",
                            height: "100%",
                            borderRight: "1px dashed #fff",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            width: "100%",
                            borderTop: "1px dashed #fff",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: `${
                                100 -
                                getPercentageBetween(fromY, { from: csYMin, to: csYMax }) * 100
                            }%`,
                            left: `${
                                getPercentageBetween(fromX, { from: csXMin, to: csXMax }) * 100
                            }%`,
                            boxShadow: "0 0 0 5px #000",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: `${
                                100 - getPercentageBetween(toY, { from: csYMin, to: csYMax }) * 100
                            }%`,
                            left: `${
                                getPercentageBetween(toX, { from: csXMin, to: csXMax }) * 100
                            }%`,
                            boxShadow: "0 0 0 5px #c00",
                        }}
                    />
                </div>
                <div />
                <div
                    style={{
                        width: "200px",
                        paddingRight: "5px",
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                    }}
                >
                    <div style={{ transform: "translateX(-1000cw)" }}>{csXMin}</div>
                    <div style={{ textAlign: "center" }}>
                        {getPositionBetween(csXMax, csXMin, 0.5)}
                    </div>
                    <div style={{ textAlign: "right" }}>{csXMax}</div>
                </div>
            </div>

            <Source
                dark
                code={`
import { getAngle } from "@baggie/math";

const from = { x: ${fromX}, y: ${fromY} };
const to = { x: ${toX}, y: ${toY} };

const angle = getAngle(from, to);
// angle = ${angle}
`}
            />
        </>
    );
};
