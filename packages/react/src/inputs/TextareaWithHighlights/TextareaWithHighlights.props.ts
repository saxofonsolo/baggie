import React from "react";

type HighlightRange = [from: number, to: number];
type HighlightType = HighlightRange | RegExp | string;

export interface TextareaWithHighlightsProps
    extends React.DetailedHTMLProps<
        React.TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
    > {
    highlights?: HighlightType | HighlightType[];
}
