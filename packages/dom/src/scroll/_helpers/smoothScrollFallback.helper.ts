/**
 * @internal
 * @param x - Position on the x-axis to scroll to
 * @param y - Position on the y-axis to scroll to
 */
export function smoothScrollFallback(x: number, y: number): Promise<void> {
    const durationMs = 1000;

    // Calculate scroll progress
    const cosParameters = {
        x:
            ((window.pageXOffset || document.documentElement.scrollLeft) - x) /
            2,
        y: ((window.pageYOffset || document.documentElement.scrollTop) - y) / 2,
    };

    let scrollCount = 0;
    let oldTimestamp = Date.now();

    return new Promise((resolve: () => void): void => {
        let scrollDone = false;
        let interruptScrollFlag = false;

        // Once this function is called, set 'interruptScrollFlag' to true, which resolves the promise
        const interruptScroll = (): void => {
            interruptScrollFlag = true;
        };

        // Stop scrolling if the user starts manually scrolling
        document.addEventListener("wheel", interruptScroll);

        function step(): void {
            if (interruptScrollFlag) {
                document.removeEventListener("wheel", interruptScroll);
                resolve();
                // Since resolving does not prevent the rest of the function from running, we also need to return
                return;
            }

            const newTimestamp = Date.now();
            const timeDifferenceMs = newTimestamp - oldTimestamp;
            let moveToX;
            let moveToY;

            // Pi is used to make easing
            scrollCount += Math.PI / (durationMs / timeDifferenceMs);

            // As soon as we cross over Pi, we're about where we need to be
            if (scrollCount >= Math.PI) {
                moveToX = x;
                moveToY = y;
                scrollDone = true;
            } else {
                // Calculate and set scroll position
                moveToX = Math.round(
                    x +
                        cosParameters.x +
                        cosParameters.x * Math.cos(scrollCount)
                );
                moveToY = Math.round(
                    y +
                        cosParameters.y +
                        cosParameters.y * Math.cos(scrollCount)
                );
            }

            // Perform scroll action
            window.scrollTo(moveToX, moveToY);

            if (scrollDone) {
                document.removeEventListener("wheel", interruptScroll);
                resolve();
            } else {
                oldTimestamp = newTimestamp;
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    });
}
