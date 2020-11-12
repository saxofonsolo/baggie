/**
 * If an element is focused, this will blur it.
 *
 * @category Actions
 */
export const blurFocusedElement = (): void => {
    if (document.activeElement) {
        (document.activeElement as HTMLElement).blur();
    }
};
