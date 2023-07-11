import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { getDuration } from "./getDuration";

interface Props {
    speed: number;
    distance: number;
}

export const Example = (props: Props) => {
    const [speed, setSpeed] = useState(props.speed);
    const [distance, setDistance] = useState(props.distance);

    const duration = useMemo(() => getDuration(speed, distance), [speed, distance]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Speed" labelForId="speed-input">
                    <input
                        id="speed-input"
                        type="number"
                        value={speed}
                        onChange={({ target }) => setSpeed(target.valueAsNumber)}
                    />
                </InputWrapper>

                <InputWrapper label="Distance" labelForId="distance-input">
                    <input
                        id="distance-input"
                        type="number"
                        value={distance}
                        onChange={({ target }) => setDistance(target.valueAsNumber)}
                    />
                </InputWrapper>

                <InputWrapper label="Duration" labelForId={undefined}>
                    <div style={{ padding: "5px 0" }}>{isNaN(duration) ? "Error" : duration}</div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { getDuration } from "@baggie/core";

const speed = ${speed};
const distance = ${distance};

const duration = getDuration(speed, distance);
// duration = ${duration}
`}
            />
        </>
    );
};
