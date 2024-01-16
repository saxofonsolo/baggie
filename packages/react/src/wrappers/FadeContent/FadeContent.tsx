import React, { CSSProperties } from "react";
import { FadeContentProps } from "./FadeContent.props";

const oppositeDirection = {
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left",
} as const;

export const FadeContent = ({
    children,
    direction,
    width,
}: FadeContentProps) => {
    const gradientDirection = oppositeDirection[direction];
    const gradientWidth =
        typeof width === "undefined"
            ? "100%"
            : typeof width === "string"
              ? width
              : `${width}px`;

    const fadeStyle: CSSProperties = {
        width: "100%",
        maskImage: `linear-gradient(to ${gradientDirection}, #0000, #000 ${gradientWidth})`,
    };

    return <div style={fadeStyle}>{children}</div>;
};
