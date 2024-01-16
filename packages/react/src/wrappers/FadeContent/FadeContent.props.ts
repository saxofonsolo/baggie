import { PropsWithChildren } from "react";

export type FadeContentProps = PropsWithChildren<{
    direction: "top" | "bottom" | "left" | "right";
    width?: number | string;
}>;
