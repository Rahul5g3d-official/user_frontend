import { siteContent } from "../../content/site";
import { Heading, Label, Text } from "../ui/Typography";
import { Container } from "./Container";

type PageHeroProps = { eyebrow: string; title: string; description: string; compact?: boolean };

export function PageHero({ eyebrow, title, description, compact = false }: PageHeroProps) {
  return <section className="relative overflow-hidden border-b border-line bg-tint"><Container className={`relative py-18 ${compact ? "sm:py-20" : "sm:py-28 lg:py-36"}`}><div className="relative z-10 max-w-4xl"><Label>{eyebrow}</Label><Heading className="mt-5" level={1}>{title}</Heading><Text className="mt-7 max-w-2xl" size="large">{description}</Text></div><div className="absolute right-0 top-0 hidden h-full w-1/3 border-l border-ink/10 lg:block" aria-hidden="true"><div className="grid h-full place-items-center"><span className="font-serif text-8xl text-brand/30">{siteContent.brand.name}</span></div></div></Container></section>;
}
