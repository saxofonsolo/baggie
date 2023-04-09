/**
 * @category Input - Detect Input Method
 */
export interface DetectInputMethodOptions {
    touchClass?: string;
    mouseClass?: string;
    mouseMoveThreshold?: number;
    continuousDetection?: boolean;
    setClassOnElement?: HTMLElement | false;
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
 */
export class DetectInputMethod {
    private mouseMoveCount: number;
    private settings: DetectInputMethodOptions;

    constructor(options: DetectInputMethodOptions) {
        this.mouseMoveCount = 0;
        this.settings = {
            touchClass: "touch-input",
            mouseClass: "mouse-input",
            mouseMoveThreshold: 5,
            continuousDetection: false,
            setClassOnElement: document.documentElement,
            ...options,
        };

        document.addEventListener("touchstart", this.touchFired);
        document.addEventListener("mousemove", this.mouseMoved);
    }

    private touchFired = (): void => {
        this.mouseMoveCount = 0;

        if (!this.settings.continuousDetection) {
            this.unbind();
        }

        const element = this.settings.setClassOnElement;
        if (element) {
            element.classList.remove(this.settings.mouseClass || "");
            element.classList.add(this.settings.touchClass || "");
        }

        if (this.settings.callback) {
            this.settings.callback({
                isMouse: false,
                isTouch: true,
            });
        }
    };

    private mouseMoved = (): void => {
        this.mouseMoveCount += 1;

        if (this.mouseMoveCount >= (this.settings.mouseMoveThreshold || 5)) {
            if (!this.settings.continuousDetection) {
                this.unbind();
            }

            const element = this.settings.setClassOnElement;
            if (element) {
                element.classList.remove(this.settings.touchClass || "");
                element.classList.add(this.settings.mouseClass || "");
            }

            if (this.settings.callback) {
                this.settings.callback({
                    isMouse: true,
                    isTouch: false,
                });
            }
        }
    };

    unbind = (): void => {
        document.removeEventListener("touchstart", this.touchFired);
        document.removeEventListener("mousemove", this.mouseMoved);
    };
}
