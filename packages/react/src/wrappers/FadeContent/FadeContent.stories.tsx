import { Meta } from "@storybook/react";
import { FadeContent } from "./FadeContent";
import { FadeContentProps } from "./FadeContent.props";

type StoryType = Meta<FadeContentProps>;

/**
 * Wrap this around inputs and select boxes to give them a label and a helper text.
 */
const def: StoryType = {
    component: FadeContent,
    args: {
        direction: "right",
        children: (
            <div
                style={{
                    minHeight: "50px",
                    padding: "10px",
                    background: "black",
                    color: "white",
                }}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam beatae consequuntur cum, cupiditate debitis delectus
                distinctio ea exercitationem fugit harum hic magni nemo omnis
                quisquam recusandae rem sapiente soluta unde!
            </div>
        ),
    },
    argTypes: {
        direction: {
            type: "string",
        },
        width: {
            table: {
                type: {
                    summary: [`number`, `string`],
                    detail: "number will be converted to pixels",
                },
                defaultValue: { summary: `"100%"` },
            },
        },
        children: {
            control: "none",
        },
    },
};
export default def;

export const Right: StoryType = {
    args: {
        direction: "right",
    },
};

export const Left: StoryType = {
    args: {
        direction: "left",
    },
};

export const Top: StoryType = {
    args: {
        direction: "top",
    },
};

export const Bottom: StoryType = {
    args: {
        direction: "bottom",
    },
};

export const WithWidth: StoryType = {
    args: {
        direction: "right",
        width: 30,
    },
};
