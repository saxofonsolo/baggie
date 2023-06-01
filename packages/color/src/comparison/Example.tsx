import React, { useMemo, useRef, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { ColorInput } from "../_components/ColorInput/ColorInput";
import { isHexColor } from "../check/isHexColor/isHexColor";
import { ColorComparison } from "./colorComparison";

interface Props {
    compareColor: string;
    colors: string[];
}

export const Example = (props: Props) => {
    const [compareColor, setCompareColor] = useState(props.compareColor);
    const [colors, setColors] = useState(props.colors);
    const comparisonRef = useRef(new ColorComparison(colors));

    const realColors = useMemo(() => colors.filter((color) => isHexColor(color)), [colors]);
    const comparison = useMemo(() => {
        try {
            comparisonRef.current.reset();
            comparisonRef.current.add(realColors);
            return comparisonRef.current.compare(compareColor);
        } catch (err) {
            return [];
        }
    }, [realColors, compareColor]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "10px" }}>
                <ColorInput
                    label="Compare color"
                    value={compareColor}
                    onChange={(x) => setCompareColor(x)}
                />
            </div>

            <fieldset>
                <legend>Palette</legend>

                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    {colors.map((color, index) => (
                        <ColorInput
                            key={`${index}--${color}`}
                            label={`Color ${index + 1}`}
                            value={color}
                            onChange={(nc) =>
                                setColors((x) => {
                                    const newColors = [...x];
                                    newColors[index] = nc;
                                    return newColors;
                                })
                            }
                        />
                    ))}
                </div>
            </fieldset>

            <div style={{ marginTop: 20 }}>
                <InputWrapper label="Sorted" labelForId={undefined}>
                    <div
                        style={{
                            display: "grid",
                            gridAutoColumns: "minmax(0, 1fr)",
                            gridAutoFlow: "column",
                        }}
                    >
                        {comparison.map((x, index) => (
                            <div
                                key={`nearest-${index}-${x}`}
                                style={{ height: "50px", background: x }}
                            />
                        ))}
                    </div>
                </InputWrapper>
            </div>

            <Source
                dark
                code={`
import { ColorComparison } from "@baggie/color";

const colors = ${JSON.stringify(realColors, null, 4)};

const comparison = new ColorComparison(colors);

const sorted = comparison.compare("${compareColor}");
/*
sorted = ${JSON.stringify(comparison, null, 4)}
*/
`}
            />
        </>
    );
};
