export const blurFocusedElement = (): void => {
    if (document.activeElement) {
        (document.activeElement as HTMLElement).blur();
    }
};
