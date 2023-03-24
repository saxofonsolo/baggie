import { ReactNode } from "react";

export interface ConditionalWrapperProps {
    condition: boolean;
    wrapper: (children: ReactNode) => ReactNode;
    wrapperFallback?: (children: ReactNode) => ReactNode;
    children: ReactNode;
}
