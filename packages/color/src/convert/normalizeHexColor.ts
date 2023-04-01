import { isHexColor } from "../check/isHexColor/isHexColor";

export const normalizeHexColor = (hex: string) =>
    isHexColor(hex)
        ? (hex.length < 7
              ? `#${hex
                    .split("")
                    .slice(1)
                    .map((char) => char + char)
                    .join("")}`
              : hex
          ).toLowerCase()
        : hex;
