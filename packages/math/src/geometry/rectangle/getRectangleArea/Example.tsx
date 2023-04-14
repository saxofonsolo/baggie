import React, { useMemo, useState } from "react";
import { InputWrapper } from "@baggie/react";
import { Source } from "@storybook/blocks";
import { getRectangleArea } from "./getRectangleArea";

interface Props {
    x: number;
    y: number;
}

export const Example = (props: Props) => {
    const [x, setX] = useState(props.x);
    const [y, setY] = useState(props.y);

    const area = useMemo(() => getRectangleArea(x, y), [x, y]);

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

                <InputWrapper label="Surface area" labelForId={undefined}>
                    <div style={{ padding: "5px 0" }}>{isNaN(area) ? "Error" : area}</div>
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
                        inset: "2px",
                        background: `repeating-linear-gradient(
                            -45deg,
                            #900,
                            #900 2px,
                            #FC0 2px,
                            #FC0 8px
                        )`,
                    }}
                />{" "}
            </div>

            <Source
                dark
                code={`
import { getRectangleArea } from "@baggie/math";

const x = ${x || 0};
const y = ${y || 0};

const surfaceArea = getRectangleArea(x, y);
// surfaceArea = ${area}
`}
            />
        </>
    );
};
