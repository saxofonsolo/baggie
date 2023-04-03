import { Meta } from "@storybook/react";
import { randSentence } from "@ngneat/falso";
import { InputWrapper } from "./InputWrapper";
import { InputWrapperProps } from "./InputWrapper.props";

type StoryType = Meta<InputWrapperProps>;

/**
 * Wrap this around inputs and select boxes to give them a label and a helper text.
 */
export default {
    component: InputWrapper,
    args: {
        label: "",
        labelForId: "input-id",
        helperText: "",
        labelRight: "",
        invalid: false,
        children: (
            <input
                readOnly
                placeholder="Input"
                style={{ width: "100%", boxSizing: "border-box" }}
            />
        ),
    },
    argTypes: {
        label: {
            type: "string",
        },
        labelForId: {
            description:
                "**All inputs with a label should have an ID**, which also goes in the `for` attribute of the label in order to connect them.<br />If you can't think of one, use React's `useId()`",
        },
        helperText: {
            type: "string",
        },
        labelRight: {
            type: "string",
        },
        children: {
            control: "none",
        },
    },
} as StoryType;

export const WithEverything: StoryType = {
    args: {
        label: randSentence({ length: 2 }).join(" ").replace(/\.$/, ""),
        labelRight: randSentence({ length: 3 }).join(" ").replace(/\.$/, ""),
        helperText: randSentence({ length: 6 }).join(" ").replace(/\.$/, ""),
    },
};

export const WithLabel: StoryType = {
    args: {
        label: randSentence({ length: 2 }).join(" ").replace(/\.$/, ""),
    },
};

export const WithHelperText: StoryType = {
    args: {
        label: randSentence({ length: 2 }).join(" ").replace(/\.$/, ""),
        helperText: randSentence({ length: 6 }).join(" ").replace(/\.$/, ""),
    },
};

export const Invalid: StoryType = {
    args: {
        label: randSentence({ length: 2 }).join(" ").replace(/\.$/, ""),
        helperText: randSentence({ length: 6 }).join(" ").replace(/\.$/, ""),
        invalid: true,
    },
};

export const WithTooltip: StoryType = {
    args: {
        label: randSentence({ length: 2 }).join(" ").replace(/\.$/, ""),
        labelRight: randSentence({ length: 3 }).join(" ").replace(/\.$/, ""),
    },
};
