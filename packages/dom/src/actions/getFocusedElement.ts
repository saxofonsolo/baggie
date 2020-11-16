import { isBrowser } from "@baggie/detection";

/**
 * If an element is focused, return it.
 *
 * @category Actions
 */
export const getFocusedElement = (): HTMLElement | null =>
    (isBrowser && (document?.activeElement as HTMLElement)) || null;
