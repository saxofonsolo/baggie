interface DetectInputMethodOptions {
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

const defaultSettings = {
    mouseClass: "mouse-input",
    touchClass: "touch-input",
    mouseMoveThreshold: 5,
    continuousDetection: false,
    setClassOnElement: document.documentElement,
};

export class DetectInputMethod {
    settings: DetectInputMethodOptions;
    mouseMoveCount: number;

    constructor(options?: DetectInputMethodOptions) {
        this.settings = {
            ...defaultSettings,
            ...options,
        };

        this.mouseMoveCount = 0;

        document.addEventListener("touchstart", this.touchFired);
        document.addEventListener("mousemove", this.mouseMoved);
    }

    touchFired = (): void => {
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
            const element =
                this.settings.setClassOnElement ||
                defaultSettings.setClassOnElement;
            element.classList.remove(this.settings.mouseClass || "");
            element.classList.add(this.settings.touchClass || "");
        }
    };

    mouseMoved = (): void => {
        this.mouseMoveCount += 1;

        if (
            this.mouseMoveCount >=
            (this.settings.mouseMoveThreshold ||
                defaultSettings.mouseMoveThreshold)
        ) {
            if (!this.settings.continuousDetection) {
                this.unbind();
            }

            if (this.settings.callback) {
                this.settings.callback({
                    isMouse: true,
                    isTouch: false,
                });
            } else {
                const element =
                    this.settings.setClassOnElement ||
                    defaultSettings.setClassOnElement;
                element.classList.remove(this.settings.touchClass || "");
                element.classList.add(this.settings.mouseClass || "");
            }
        }
    };

    unbind = (): void => {
        document.removeEventListener("touchstart", this.touchFired);
        document.removeEventListener("mousemove", this.mouseMoved);
    };
}
