import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { convertToDate } from "./convertToDate";

type DateObj = { day: number; month: number; year: number };

interface Props {
    date: string | DateObj;
    zeroBasedMonth?: boolean;
    monthBeforeDay?: boolean;
}

export const Example = (props: Props) => {
    const [date, setDate] = useState(props.date);
    const [zeroBasedMonth, setZeroBasedMonth] = useState(props.zeroBasedMonth || false);
    const [monthBeforeDay, setMonthBeforeDay] = useState(props.monthBeforeDay || false);

    const returnedDate = useMemo(
        () => convertToDate(date, { zeroBasedMonth, monthBeforeDay }),
        [date, zeroBasedMonth, monthBeforeDay],
    );

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {typeof date === "string" ? (
                    <InputWrapper label="Date" labelForId="date">
                        <input
                            id="date-input"
                            value={date}
                            onChange={({ target }) => setDate(target.value)}
                            spellCheck={false}
                        />
                    </InputWrapper>
                ) : (
                    <div style={{ display: "flex", gap: "10px" }}>
                        <InputWrapper label="Day" labelForId="day">
                            <input
                                id="day-input"
                                type="number"
                                value={date.day}
                                onChange={({ target }) =>
                                    setDate((current) => ({
                                        ...(current as DateObj),
                                        day: target.valueAsNumber,
                                    }))
                                }
                            />
                        </InputWrapper>
                        <InputWrapper label="Month" labelForId="month">
                            <input
                                id="month-input"
                                type="number"
                                value={date.month}
                                onChange={({ target }) =>
                                    setDate((current) => ({
                                        ...(current as DateObj),
                                        month: target.valueAsNumber,
                                    }))
                                }
                            />
                        </InputWrapper>
                        <InputWrapper label="Year" labelForId="year">
                            <input
                                id="year-input"
                                type="number"
                                value={date.year}
                                onChange={({ target }) =>
                                    setDate((current) => ({
                                        ...(current as DateObj),
                                        year: target.valueAsNumber,
                                    }))
                                }
                            />
                        </InputWrapper>
                    </div>
                )}

                <label>
                    <input
                        type="checkbox"
                        checked={zeroBasedMonth}
                        onChange={() => setZeroBasedMonth((current) => !current)}
                    />{" "}
                    Zero based month
                </label>

                {typeof date === "string" && (
                    <label>
                        <input
                            type="checkbox"
                            checked={monthBeforeDay}
                            onChange={() => setMonthBeforeDay((current) => !current)}
                        />{" "}
                        Month before date
                    </label>
                )}
            </div>

            <Source
                dark
                code={`
import { convertToDate } from "@baggie/core";

const date = ${typeof date === "string" ? `"${date}"` : JSON.stringify(date, null, 4)};
${
    monthBeforeDay || zeroBasedMonth
        ? `const options = {
${monthBeforeDay ? "    monthBeforeDay: true,\n" : ""}${
              zeroBasedMonth ? "    zeroBasedMonth: true,\n" : ""
          }};\n`
        : ""
}
const returnedDate = convertToDate(date${monthBeforeDay || zeroBasedMonth ? ", options" : ""});
// ${
                    returnedDate
                        ? `returnedDate.toISOString() = "${returnedDate.toISOString()}"`
                        : "returnedDate = undefined"
                }
`}
            />
        </>
    );
};
