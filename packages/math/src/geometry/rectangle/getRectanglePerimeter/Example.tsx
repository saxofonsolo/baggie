import React, { useMemo, useState } from "react";
import { InputWrapper } from "@baggie/react";
import { Source } from "@storybook/blocks";
import { getRectanglePerimeter } from "./getRectanglePerimeter";

interface Props {
    x: number;
    y: number;
}

export const Example = (props: Props) => {
    const [x, setX] = useState(props.x);
    const [y, setY] = useState(props.y);

    const perimeter = useMemo(() => getRectanglePerimeter(x, y), [x, y]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="X" labelForId="x-input">
                    <input
                        id="x-input"
                        type="number"
                        value={x}
                        onChange={({ target }) => setX(target.valueAsNumber)}
                    />
                </InputWrapper>

                <InputWrapper label="Y" labelForId="x-input">
                    <input
                        id="y-input"
                        type="number"
                        value={y}
                        onChange={({ target }) => setY(target.valueAsNumber)}
                    />
                </InputWrapper>

                <InputWrapper label="Perimeter" labelForId={undefined}>
                    <div style={{ padding: "5px" }}>{isNaN(perimeter) ? "Error" : perimeter}</div>
                </InputWrapper>
            </div>

            <div
                style={{
                    aspectRatio: `${Math.abs(x)} / ${Math.abs(y)}`,
                    background: "#FC0",
                    width:
                        Math.abs(x) >= Math.abs(y)
                            ? "150px"
                            : `${(Math.abs(x) / Math.abs(y)) * 150}px`,
                    height:
                        Math.abs(x) <= Math.abs(y)
                            ? "150px"
                            : `${(Math.abs(y) / Math.abs(x)) * 150}px`,
                    marginTop: "20px",
                    position: "relative",
                    display: "inline-block",
                    pointerEvents: "none",
                    userSelect: "none",
                    transition: "all .4s ease-out",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: "-4px",
                        border: "2px dashed #900",
                    }}
                />
            </div>

            <Source
                dark
                code={`
import { getRectanglePerimeter } from "@baggie/math";

const x = ${x || 0};
const y = ${y || 0};

const perimeter = getRectanglePerimeter(radius);
// perimeter = ${perimeter}
`}
            />
        </>
    );
};
