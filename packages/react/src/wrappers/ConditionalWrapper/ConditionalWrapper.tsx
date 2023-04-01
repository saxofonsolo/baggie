import { ConditionalWrapperProps } from "./ConditionalWrapper.props";

export const ConditionalWrapper = ({
    condition,
    wrapper,
    wrapperFallback,
    children,
}: ConditionalWrapperProps) =>
    condition
        ? wrapper(children)
        : wrapperFallback
        ? wrapperFallback(children)
        : children;
