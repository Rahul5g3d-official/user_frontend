import { useEffect } from "react";
import { isComingSoonMode } from "../../config/site-mode";
import { metadata } from "../../content/metadata";

const comingSoonMetadata = {
  title: "G4U — Coming Soon",
  description:
    "G4U is building meaningful opportunities for students and young individuals to learn, grow, connect and discover.",
} as const;

function setMeta(name: string, content?: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[name="${name}"]`,
  );

  if (!content) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("meta");
    element.name = name;
    document.head.append(element);
  }

  element.content = content;
}

export function getDocumentMetadata() {
  return isComingSoonMode ? comingSoonMetadata : metadata;
}

export function SiteMetadata() {
  useEffect(() => {
    const currentMetadata = getDocumentMetadata();
    document.title = currentMetadata.title;
    setMeta("description", currentMetadata.description);
    setMeta("robots", isComingSoonMode ? "noindex, nofollow" : undefined);

    return () => undefined;
  }, []);

  return null;
}
