import React, { useMemo } from "react";
import { isHexColor } from "../../check/isHexColor/isHexColor";
import S from "./ColorViewer.module.scss";

interface Props {
    color: string | undefined;
    splitColor?: string;
}

export const ColorViewer = ({ color, splitColor }: Props) => {
    const isSplit = useMemo(() => typeof splitColor === "string", [splitColor]);
    const isValidA = useMemo(
        () => (color ? isHexColor(color) : false),
        [color],
    );
    const isValidB = useMemo(
        () => (isSplit ? isHexColor(splitColor as string) : false),
        [isSplit, splitColor],
    );

    return (
        <div className={S.wrapper}>
            <div className={S.insideWrapper}>
                {(isValidA && (!isSplit || isValidB)) || (
                    <svg
                        height="100px"
                        width="100px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 31 31"
                        className={S.crossSvg}
                    >
                        <g transform="rotate(45 15.5 15.5)" fill="#900">
                            <rect x="15" y="5" width="1" height="21" />
                            <rect x="5" y="15" width="21" height="1" />
                        </g>
                    </svg>
                )}

                <div
                    className={S.colorA}
                    style={{
                        border: `50px solid ${
                            isSplit || !isValidA
                                ? "transparent"
                                : (color as string)
                        }`,
                        borderTopColor: isValidA ? color : "transparent",
                        borderLeftColor: isValidA ? color : "transparent",
                    }}
                />
                {isSplit ? (
                    <div
                        className={S.colorB}
                        style={{
                            borderRightColor: isValidB
                                ? splitColor
                                : "transparent",
                            borderBottomColor: isValidB
                                ? splitColor
                                : "transparent",
                        }}
                    />
                ) : null}
            </div>
            {isSplit || <div className={S.text}>{color}</div>}
        </div>
    );
};
