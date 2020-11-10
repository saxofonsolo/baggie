export interface CIELAB {
    l: number; // The lightness value (0 to 1)
    a: number; // The green–red value (-128 to 128)
    b: number; // The blue–yellow value (-128 to 128)
    alpha?: number; // 0 to 1
}
