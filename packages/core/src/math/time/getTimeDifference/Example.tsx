import React, { useEffect, useMemo, useRef, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { getTimeDifference } from "./getTimeDifference";

interface Props {
    from?: number;
    to?: number;
}

export const Example = (props: Props) => {
    const [fromTime, setFromTime] = useState(props.from || Date.now());
    const [toTime, setToTime] = useState(props.to || Date.now());
    const intervalRef = useRef<ReturnType<typeof setInterval>>();
    const fromString = new Date(fromTime).toISOString().replace(/\.[0-9]+Z$/, "");
    const toString = new Date(toTime).toISOString().replace(/\.[0-9]+Z$/, "");

    const difference = useMemo(() => getTimeDifference(fromTime, toTime), [fromTime, toTime]);

    useEffect(() => {
        if (!props.to) {
            intervalRef.current = setInterval(() => setToTime(Date.now()), 1000);
            return () => clearInterval(intervalRef.current);
        }
    }, [props.to]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="From time" labelForId="from-input">
                    <input
                        id="from-input"
                        type="datetime-local"
                        value={fromString}
                        onChange={({ target }) => setFromTime(target.valueAsNumber)}
                    />
                </InputWrapper>

                <InputWrapper label="To time" labelForId="to-input">
                    <input
                        id="to-input"
                        type="datetime-local"
                        value={toString}
                        readOnly={!props.to}
                        onChange={({ target }) => setToTime(target.valueAsNumber)}
                    />
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { getTimeDifference } from "@baggie/core";

const fromTimestampMs = ${fromTime}; // ${fromString}
const toTimestampMs = ${toTime}; // ${toString}

const difference = getTimeDifference(fromTimestampMs, toTimestampMs);
/*
difference = ${JSON.stringify(difference, null, 4)}
*/
`}
            />
        </>
    );
};
