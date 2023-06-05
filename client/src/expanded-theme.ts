import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
    // extend PaletteColor in client\src\expanded-theme.ts, add [key: number]: string;
    // to enable something like: 300: "#f7d299",
    interface PaletteColor {
        [key: number]: string;
    }

    interface Palette {
        tertiary: PaletteColor;
    }
}