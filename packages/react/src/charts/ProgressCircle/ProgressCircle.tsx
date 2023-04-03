import React from "react";
import { ProgressCircleProps } from "./ProgressCircle.props";
import S from "./ProgressCircle.module.scss";

export const ProgressCircle = ({
    centerComponent,
    ...props
}: ProgressCircleProps) => {
    return (
        <div
            className={[
                S.progressCircle,
                props.roundedEdges ? S.rounded : S.notRounded,
            ].join(" ")}
            style={{
                // @ts-ignore
                "--percentage": props.value,
                "--size":
                    typeof props.size === "number"
                        ? `${props.size}px`
                        : props.size,
                "--width":
                    typeof props.width === "number"
                        ? `${props.width}px`
                        : props.width,
                "--color": props.color,
                "--bgcolor": props.bgColor,
            }}
        >
            {centerComponent ? centerComponent(props) : null}
        </div>
    );
};
