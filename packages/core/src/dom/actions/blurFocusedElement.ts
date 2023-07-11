import { getFocusedElement } from "./getFocusedElement";

/**
 * If an element is focused, this will blur it.
 */
export const blurFocusedElement = (): void => getFocusedElement()?.blur();
