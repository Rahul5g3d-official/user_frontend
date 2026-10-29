export const ROUTES = { HOME: "/", ABOUT: "/about", SERVICES: "/services", APPROACH: "/our-approach", IMPACT: "/our-impact", CAREERS: "/careers", CONTACT: "/contact", FAQ: "/faq", PRIVACY: "/privacy-policy", TERMS: "/terms-and-conditions" } as const;
export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
