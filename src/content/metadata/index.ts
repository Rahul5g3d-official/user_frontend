import { siteContent } from "../site";

export const metadata = {
  title: `${siteContent.brand.name} — ${siteContent.brand.tagline}`,
  description: siteContent.footer.description,
  language: "en",
} as const;
