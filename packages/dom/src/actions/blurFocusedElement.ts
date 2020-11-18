import { getFocusedElement } from "./getFocusedElement";

/**
 * If an element is focused, this will blur it.
 *
 * @category Actions
 */
export const blurFocusedElement = (): void => getFocusedElement()?.blur();
