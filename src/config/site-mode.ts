export type SiteMode = "coming-soon" | "live";

/**
 * This is intentionally a public, build-time setting. It controls presentation
 * only; it is not an access-control mechanism for any route, API, or data.
 */
const requestedMode = import.meta.env.VITE_SITE_MODE?.trim().toLowerCase();

// Fail closed so an omitted or invalid production variable never publishes the
// unreleased site by accident.
export const siteMode: SiteMode = requestedMode === "live" ? "live" : "coming-soon";

export const isComingSoonMode = siteMode === "coming-soon";
