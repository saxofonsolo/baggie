import React from "react";

export interface ProgressCircleProps {
    value: number;
    size?: number | string;
    width?: number | string;
    color?: string;
    bgColor?: string;
    roundedEdges?: boolean;
    centerComponent?: (
        props: Omit<ProgressCircleProps, "centerComponent">,
    ) => React.ReactNode;
}
