/**
 * Get the duration when supplying speed and distance.
 */
export function getDuration(speed: number, distance: number): number {
    return distance / speed;
}
