import { getFocusedElement } from "./getFocusedElement";

/**
 * If an element is focused, this will blur it.
 */
export function blurFocusedElement(): void {
    return getFocusedElement()?.blur();
}
