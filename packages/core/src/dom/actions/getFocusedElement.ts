import { isBrowser } from "../../detection";

/**
 * If an element is focused, return it.
 */
export function getFocusedElement(): HTMLElement | null {
    return (isBrowser && (document?.activeElement as HTMLElement)) || null;
}
