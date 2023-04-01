/**
 * Get the duration when supplying speed and distance.
 */
export const getDuration = (speed: number, distance: number): number =>
    distance / speed;
