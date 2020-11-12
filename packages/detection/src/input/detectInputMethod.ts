/**
 * @category Input - Detect Input Method
 */
export interface DetectInputMethodOptions {
    touchClass?: string;
    mouseClass?: string;
    mouseMoveThreshold?: number;
    continuousDetection?: boolean;
    setClassOnElement?: HTMLElement;
    callback?: ({
        isMouse,
        isTouch,
    }: {
        isMouse: boolean;
        isTouch: boolean;
    }) => void;
}

/**
 * Detect if the user is using **touch** or a **mouse** as an input device.
 *
 * @category Input - Detect Input Method
 */
export class DetectInputMethod {
    private settings: DetectInputMethodOptions;
    private mouseMoveCount: number;

    constructor(
        options: DetectInputMethodOptions = {
            touchClass: "touch-input",
            mouseClass: "mouse-input",
            mouseMoveThreshold: 5,
            continuousDetection: false,
            setClassOnElement: document.documentElement,
        }
    ) {
        this.settings = options;
        this.mouseMoveCount = 0;

        document.addEventListener("touchstart", this.touchFired);
        document.addEventListener("mousemove", this.mouseMoved);
    }

    private touchFired = (): void => {
        this.mouseMoveCount = 0;

        if (!this.settings.continuousDetection) {
            this.unbind();
        }

        if (this.settings.callback) {
            this.settings.callback({
                isMouse: false,
                isTouch: true,
            });
        } else {
            const element = this.settings.setClassOnElement;
            element?.classList.remove(this.settings.mouseClass || "");
            element?.classList.add(this.settings.touchClass || "");
        }
    };

    private mouseMoved = (): void => {
        this.mouseMoveCount += 1;

        if (this.mouseMoveCount >= (this.settings.mouseMoveThreshold || 5)) {
            if (!this.settings.continuousDetection) {
                this.unbind();
            }

            if (this.settings.callback) {
                this.settings.callback({
                    isMouse: true,
                    isTouch: false,
                });
            } else {
                const element = this.settings.setClassOnElement;
                element?.classList.remove(this.settings.touchClass || "");
                element?.classList.add(this.settings.mouseClass || "");
            }
        }
    };

    unbind = (): void => {
        document.removeEventListener("touchstart", this.touchFired);
        document.removeEventListener("mousemove", this.mouseMoved);
    };
}
