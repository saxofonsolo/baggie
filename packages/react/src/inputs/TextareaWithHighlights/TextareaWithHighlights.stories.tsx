import { Meta } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { TextareaWithHighlights } from "./TextareaWithHighlights";
import { TextareaWithHighlightsProps } from "./TextareaWithHighlights.props";

type StoryType = Meta<TextareaWithHighlightsProps>;

const defaultValue = faker.lorem.paragraph(5);

/**
 * A textarea with highlights.
 */
export default {
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
} as StoryType;

/**
 * If the condition for showing the wrapper is `true`
 */
export const Default: StoryType = {
    args: {},
};
