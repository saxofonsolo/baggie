import React, { useMemo, useState } from "react";
import { Source } from "@storybook/blocks";
import { InputWrapper } from "@baggie/react";
import { ColorViewer } from "../../_components/ColorViewer/ColorViewer";
import { convertRgbToHex } from "../convertRgbToHex/convertRgbToHex";
import { convertHslToRgb } from "./convertHslToRgb";

interface Props {
    hue: number;
    saturation: number;
    lightness: number;
    alpha: number;
}

export const Example = (props: Props) => {
    const [hue, setHue] = useState(props.hue);
    const [saturation, setSaturation] = useState(props.saturation);
    const [lightness, setLightness] = useState(props.lightness);
    const [alpha, setAlpha] = useState(props.alpha);

    const { rgb, hex } = useMemo(() => {
        const rgb = convertHslToRgb({ hue, saturation, lightness, alpha });
        return { rgb, hex: convertRgbToHex(rgb) };
    }, [hue, saturation, lightness, alpha]);

    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                <InputWrapper label="Hue" labelRight={hue} labelForId="hue-input">
                    <input
                        id="hue-input"
                        type="range"
                        min={0}
                        max={360}
                        step={1}
                        value={hue}
                        onChange={({ target }) => setHue(target.valueAsNumber)}
                    />
                </InputWrapper>

                <InputWrapper
                    label="Saturation"
                    labelRight={saturation}
                    labelForId="saturation-input"
                >
                    <input
                        id="saturation-input"
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        value={saturation}
                        onChange={({ target }) => setSaturation(target.valueAsNumber)}
                    />
                </InputWrapper>

                <InputWrapper label="Lightness" labelRight={lightness} labelForId="lightness-input">
                    <input
                        id="lightness-input"
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        value={lightness}
                        onChange={({ target }) => setLightness(target.valueAsNumber)}
                    />
                </InputWrapper>

                <InputWrapper label="Alpha" labelRight={alpha.toFixed(2)} labelForId="alpha-input">
                    <input
                        id="alpha-input"
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        value={alpha}
                        onChange={({ target }) => setAlpha(target.valueAsNumber)}
                    />
                </InputWrapper>
            </div>

            <div
                style={{
                    marginTop: "25px",
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                }}
            >
                <ColorViewer color={hex} />

                <table style={{ margin: 0 }}>
                    <tbody>
                        <tr>
                            <td>
                                <b>Red:</b>
                            </td>
                            <td>{rgb.red}</td>
                        </tr>
                        <tr>
                            <td>
                                <b>Green:</b>
                            </td>
                            <td>{rgb.green}</td>
                        </tr>
                        <tr>
                            <td>
                                <b>Blue:</b>
                            </td>
                            <td>{rgb.blue}</td>
                        </tr>
                        <tr>
                            <td>
                                <b>Alpha:</b>
                            </td>
                            <td>{rgb.alpha}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Source
                dark
                code={`
import { convertHslToRgb } from "@baggie/color";

const data = {
   hue: ${hue},
   saturation: ${saturation},
   lightness: ${lightness},
   alpha: ${alpha},
};

const rgb = convertHslToRgb(data);
/*
rgb = ${JSON.stringify(rgb, null, 4)}
*/
`}
            />
        </>
    );
};
