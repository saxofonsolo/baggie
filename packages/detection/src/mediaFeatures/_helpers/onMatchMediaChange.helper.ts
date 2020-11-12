import { isBrowser } from "../..";

/**
 * Listen for changes in match media.
 *
 * @internal
 */
export class OnMatchMediaChange {
    protected query = "";
    private readonly callback: (state: boolean) => void;

    constructor(callback: (state: boolean) => void) {
        this.callback = callback;

        if (isBrowser && window.matchMedia) {
            window
                .matchMedia(this.query)
                .addEventListener("change", this.onChange);
        }
    }

    private onChange = (event: MediaQueryListEvent): void => {
        this.callback(event.matches);
    };

    /**
     * Stop listening for changes by removing the event listener.
     */
    destroy(): void {
        if (isBrowser && window.matchMedia) {
            window
                .matchMedia(this.query)
                .removeEventListener("change", this.onChange);
        }
    }
}
