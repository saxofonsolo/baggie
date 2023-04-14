import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { getPercentage } from "./getPercentage";

export const Example = (props: Parameters<typeof getPercentage>[0]) => {
    const [part, setPart] = useState(props.part);
    const [percentage, setPercentage] = useState(props.percentage);
    const [whole, setWhole] = useState(props.whole);
    const [percentageAsDecimal, setPercentageAsDecimal] = useState(true);

    const [varsString, resultString, result] = useMemo(() => {
        const showPart = typeof part === "number";
        const showPercentage = typeof percentage === "number";
        const showWhole = typeof whole === "number";

        const partVar = showPart && `const part = ${part};`;
        const percentageVar = showPercentage && `const percentage = ${percentage};`;
        const wholeVar = showWhole && `const whole = ${whole};`;

        const result = getPercentage(
            // @ts-ignore
            {
                part: part as number,
                percentage: percentage as number,
                whole: whole as number,
            },
            percentageAsDecimal,
        );

        const realPercentage =
            (showPercentage ? percentage : result) * (percentageAsDecimal ? 100 : 1);
        const percentageAsDecimalString = percentageAsDecimal ? "" : ", false";

        const partResult =
            !showPart &&
            `
const part = getPercentage({ percentage, whole }${percentageAsDecimalString});
// part = ${result}

// ${realPercentage}% of ${whole as number} is ${result}`;
        const percentageResult =
            !showPercentage &&
            `
const percentage = getPercentage({ part, whole }${percentageAsDecimalString});
// percentage = ${result}

// ${part as number} of ${whole as number} is ${realPercentage}%`;
        const wholeResult =
            !showWhole &&
            `
const whole = getPercentage({ percentage, part }${percentageAsDecimalString});
// whole = ${result}

// ${part as number} is ${realPercentage}% of ${result}`;

        return [
            [partVar, percentageVar, wholeVar].filter((item) => item).join("\n"),
            [partResult, percentageResult, wholeResult].filter((item) => item).join("\n"),
            result,
        ];
    }, [part, percentage, whole, percentageAsDecimal]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                {typeof part === "number" && (
                    <InputWrapper label="Part" labelForId="part-input">
                        <input
                            id="part-input"
                            type="number"
                            value={part}
                            onChange={({ target }) => setPart(target.valueAsNumber || 0)}
                        />
                    </InputWrapper>
                )}
                {typeof percentage === "number" && (
                    <InputWrapper label="Percentage" labelForId="percentage-input">
                        <input
                            id="percentage-input"
                            type="number"
                            step={0.01}
                            value={percentage}
                            onChange={({ target }) => setPercentage(target.valueAsNumber || 0)}
                        />
                    </InputWrapper>
                )}
                {typeof whole === "number" && (
                    <InputWrapper label="Whole" labelForId="whole-input">
                        <input
                            id="whole-input"
                            type="number"
                            value={whole}
                            onChange={({ target }) => setWhole(target.valueAsNumber || 0)}
                        />
                    </InputWrapper>
                )}
                <InputWrapper
                    label={
                        typeof part !== "number"
                            ? "Part"
                            : typeof percentage !== "number"
                            ? "Percentage"
                            : typeof whole !== "number"
                            ? "Whole"
                            : ""
                    }
                    labelForId={undefined}
                >
                    <div style={{ padding: "5px 0" }}>{result}</div>
                </InputWrapper>
            </div>

            <label>
                <input
                    type="checkbox"
                    checked={percentageAsDecimal}
                    onChange={() => setPercentageAsDecimal((current) => !current)}
                />
                Percentage as decimal
            </label>

            <Source
                dark
                code={`
import { getPercentage } from "@baggie/math";

${varsString}
${resultString}
`}
            />
        </>
    );
};
