export const APP_CONFIG = {
  defaultLocale: "en",
  defaultTheme: "light",
} as const;

// Kept for the legacy application shell while the newer content modules are
// progressively adopted.
export const SITE = {
  name: "G4U",
  tagline: "Growth for you",
} as const;
