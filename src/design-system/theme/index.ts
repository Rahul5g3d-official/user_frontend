import { darkTheme } from "./dark";
import { lightTheme } from "./light";

export const themes = { light: lightTheme, dark: darkTheme } as const;
export type ThemeMode = keyof typeof themes;
export type ThemeTokens = typeof darkTheme;
