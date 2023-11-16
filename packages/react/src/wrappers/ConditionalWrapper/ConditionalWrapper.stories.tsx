import { Meta } from "@storybook/react";
import { randSentence } from "@ngneat/falso";
import { ConditionalWrapper } from "./ConditionalWrapper";
import { ConditionalWrapperProps } from "./ConditionalWrapper.props";

type StoryType = Meta<ConditionalWrapperProps>;

/**
 * A component that wraps your content in another component, but only if a condition is met.
 */
const def: StoryType = {
    component: ConditionalWrapper,
    args: {
        condition: false,
        wrapper: (children) => (
            <div style={{ border: "10px solid #1e3643" }}>
                <header style={{ background: "#fbaf00", padding: "10px" }}>
                    Header
                </header>
                <div style={{ padding: "10px" }}>{children}</div>
                <footer style={{ background: "#fbaf00", padding: "10px" }}>
                    Footer
                </footer>
            </div>
        ),
        wrapperFallback: (children) => (
            <div style={{ border: "10px solid #25bd59" }}>{children}</div>
        ),
        children: randSentence({ length: 3 }).join(" "),
    },
    argTypes: {
        wrapper: {
            description: "Used if `condition` is **true**",
        },
        wrapperFallback: {
            description: "Used if `condition` is **false**",
        },
    },
};
export default def;

/**
 * If the condition for showing the wrapper is `true`
 */
export const ConditionTrue: StoryType = {
    args: {
        condition: true,
    },
};

/**
 * If the condition for showing the wrapper is `false` and `wrapperFallback` is defined
 */
export const WithFallback: StoryType = {
    args: {
        condition: false,
    },
};

/**
 * If the condition for showing the wrapper is `false` with no fallback
 */
export const ConditionFalse: StoryType = {
    args: {
        condition: false,
        wrapperFallback: undefined,
    },
};
