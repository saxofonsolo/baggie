import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { getAge } from "./getAge";

interface Props {
    birth: Date;
    death?: Date;
}

export const Example = (props: Props) => {
    const [fromTime, setFromTime] = useState(props.birth);
    const [toTime, setToTime] = useState(props.death);
    const fromString = new Date(fromTime).toISOString().replace(/\.[0-9]+Z$/, "");
    const toString = toTime ? new Date(toTime).toISOString().replace(/\.[0-9]+Z$/, "") : "";

    const age = useMemo(() => getAge(fromTime, toTime), [fromTime, toTime]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Birth" labelForId="birth-input">
                    <input
                        id="birth-input"
                        type="datetime-local"
                        value={fromString}
                        onChange={({ target }) => setFromTime(new Date(target.valueAsNumber))}
                    />
                </InputWrapper>

                <InputWrapper label="To time" labelForId="to-input">
                    <input
                        id="to-input"
                        type="datetime-local"
                        value={toString}
                        onChange={({ target }) => setToTime(new Date(target.valueAsNumber))}
                    />
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { getAge } from "@baggie/core";

const birth = "${fromTime.toDateString()}";
${
    toTime
        ? `const death = "${toTime?.toDateString()}";
`
        : ""
}
const age = getAge(birth${toTime ? ", death" : ""});
// age = ${age}
`}
            />
        </>
    );
};
