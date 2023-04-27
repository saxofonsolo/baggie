import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { convertRangePosition } from "./convertRangePosition";

interface Props {
    position: number;
    fromFrom: number;
    fromTo: number;
    toFrom: number;
    toTo: number;
}

export const Example = (props: Props) => {
    const [position, setPosition] = useState(props.position);
    const [fromFrom, setFromFrom] = useState(props.fromFrom);
    const [fromTo, setFromTo] = useState(props.fromTo);
    const [toFrom, setToFrom] = useState(props.toFrom);
    const [toTo, setToTo] = useState(props.toTo);

    const result = useMemo(
        () =>
            convertRangePosition(
                position,
                { from: fromFrom, to: fromTo },
                { from: toFrom, to: toTo },
            ),
        [position, fromFrom, fromTo, toFrom, toTo],
    );

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Position" labelForId="position-input">
                    <input
                        id="position-input"
                        type="number"
                        value={position}
                        onChange={({ target }) => setPosition(target.valueAsNumber || 0)}
                        autoComplete="off"
                    />
                </InputWrapper>

                <fieldset>
                    <legend>From range</legend>

                    <InputWrapper label="From" labelForId="from-from-input">
                        <input
                            id="from-from-input"
                            type="number"
                            value={fromFrom}
                            onChange={({ target }) => setFromFrom(target.valueAsNumber || 0)}
                            autoComplete="off"
                        />
                    </InputWrapper>

                    <InputWrapper label="To" labelForId="from-to-input">
                        <input
                            id="from-to-input"
                            type="number"
                            value={fromTo}
                            onChange={({ target }) => setFromTo(target.valueAsNumber || 0)}
                            autoComplete="off"
                        />
                    </InputWrapper>
                </fieldset>

                <fieldset>
                    <legend>To range</legend>

                    <InputWrapper label="From" labelForId="to-from-input">
                        <input
                            id="to-from-input"
                            type="number"
                            value={toFrom}
                            onChange={({ target }) => setToFrom(target.valueAsNumber || 0)}
                            autoComplete="off"
                        />
                    </InputWrapper>

                    <InputWrapper label="To" labelForId="to-to-input">
                        <input
                            id="to-to-input"
                            type="number"
                            value={toTo}
                            onChange={({ target }) => setToTo(target.valueAsNumber || 0)}
                            autoComplete="off"
                        />
                    </InputWrapper>
                </fieldset>

                <InputWrapper label="Result" labelForId={undefined}>
                    <div style={{ padding: "5px 0" }}>{result}</div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { convertRangePosition } from "@baggie/math";

const position = ${position};
const fromRange = { from: ${fromFrom}, to: ${fromTo} };
const toRange = { from: ${toFrom}, to: ${toTo} };

const newPosition = convertRangePosition(position, fromRange, toRange);
// newPosition = ${result}
`}
            />
        </>
    );
};
