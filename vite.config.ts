import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

type SiteMode = "coming-soon" | "live";

const sitemapPages = [
  "/",
  "/about",
  "/services",
  "/courses",
  "/our-approach",
  "/our-impact",
  "/careers",
  "/contact",
  "/faq",
  "/privacy-policy",
  "/terms-and-conditions",
];

function siteDiscoveryFiles(mode: SiteMode): Plugin {
  return {
    name: "g4u-site-discovery-files",
    transformIndexHtml(html) {
      const isComingSoon = mode === "coming-soon";
      const title = isComingSoon
        ? "G4U — Coming Soon"
        : "G4U — Growth for you";
      const description = isComingSoon
        ? "G4U is building meaningful opportunities for students and young individuals to learn, grow, connect and discover."
        : "A platform for practical, people-centred growth.";
      const robots = isComingSoon
        ? '\n    <meta name="robots" content="noindex, nofollow" />'
        : "";

      return html
        .replace("<title>G4U</title>", `<title>${title}</title>`)
        .replace(
          "</head>",
          `    <meta name="description" content="${description}" />${robots}\n  </head>`,
        );
    },
    generateBundle() {
      const isComingSoon = mode === "coming-soon";
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: isComingSoon
          ? "User-agent: *\nDisallow: /\n"
          : "User-agent: *\nAllow: /\nSitemap: https://g4u.live/sitemap.xml\n",
      });

      const urls = isComingSoon
        ? ""
        : sitemapPages
            .map((path) => `  <url><loc>https://g4u.live${path}</loc></url>`)
            .join("\n");
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "VITE_");
  const siteMode: SiteMode =
    env.VITE_SITE_MODE?.trim().toLowerCase() === "live"
      ? "live"
      : "coming-soon";

  return {
    plugins: [react(), tailwindcss(), siteDiscoveryFiles(siteMode)],
  };
});
