import { Meta } from "@storybook/react";
import { ProgressCircle } from "./ProgressCircle";
import { ProgressCircleProps } from "./ProgressCircle.props";

type StoryType = Meta<ProgressCircleProps>;

/**
 * Wrap this around inputs and select boxes to give them a label and a helper text.
 */
export default {
    component: ProgressCircle,
    args: {
        value: 0.25,
        size: 100,
        width: 15,
        color: "#900",
        bgColor: "#FC0",
        roundedEdges: true,
        centerComponent: ({ value }) => <b>{value * 100}%</b>,
    } as ProgressCircleProps,
    argTypes: {
        value: {
            type: { required: true },
            table: { type: { summary: `number` } },
        },
        size: {
            description: "CSS: `--progress-circle-size`<hr />",
            table: {
                type: {
                    summary: [`number`, `string`],
                    detail: "number will be converted to pixels",
                },
                defaultValue: { summary: `150` },
            },
        },
        width: {
            description: "CSS: `--progress-circle-width`<hr />",
            table: {
                type: {
                    summary: [`number`, `string`],
                    detail: "number will be converted to pixels",
                },
                defaultValue: { summary: `10` },
            },
        },
        color: {
            description: "CSS: `--progress-circle-color`<hr />",
            table: {
                type: { summary: `string` },
                defaultValue: { summary: `"#7f7f7f"` },
            },
        },
        bgColor: {
            description: "CSS: `--progress-circle-bgcolor`<hr />",
            table: {
                type: { summary: `string` },
                defaultValue: { summary: `"#7f7f7f33"` },
            },
        },
        roundedEdges: {
            table: {
                type: { summary: `boolean` },
                defaultValue: { summary: `false` },
            },
        },
        centerComponent: {
            table: {
                type: { summary: `(props) => React.ReactNode)` },
            },
        },
    },
};

export const WithEverything: StoryType = {
    args: {},
};

export const DefaultValues: StoryType = {
    args: {
        value: 0.25,
        size: undefined,
        width: undefined,
        color: undefined,
        bgColor: undefined,
        roundedEdges: undefined,
        centerComponent: undefined,
    },
};
