import { Meta } from "@storybook/react";
import { randSentence } from "@ngneat/falso";
import { TextareaWithHighlights } from "./TextareaWithHighlights";
import { TextareaWithHighlightsProps } from "./TextareaWithHighlights.props";

type StoryType = Meta<TextareaWithHighlightsProps>;

const defaultValue = randSentence({ length: 5 }).join("\n\n");

/**
 * A textarea with highlights.
 */
const def: StoryType = {
    // @ts-ignore
    component: TextareaWithHighlights,
    args: {
        defaultValue,
        highlights: [
            [defaultValue.indexOf(" ") + 1, defaultValue.indexOf(".") + 1],
            "a",
        ],
        style: {
            width: "100%",
            height: "200px",
        },
    },
    argTypes: {
        highlights: {
            description:
                "One or multiple strings, regular expressions, and/or arrays with the range `[from, to]`",
        },
        defaultValue: {
            table: {
                disable: true,
            },
        },
        style: {
            table: {
                disable: true,
            },
        },
    },
};
export default def;

export const Default: StoryType = {
    args: {},
};
