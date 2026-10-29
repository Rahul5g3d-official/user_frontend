import { PageHero } from "../../components/layout/PageHero";
import { Section } from "../../components/layout/Section";
import { Heading, Text } from "../../components/ui/Typography";
import { siteContent } from "../../content/site";

type LegalKind = "privacy" | "terms";
export function LegalPage({ kind }: { kind: LegalKind }) { const c = siteContent[kind]; return <><PageHero {...c.hero} compact /><Section width="reading"><div className="border-y border-line">{c.sections.map((section) => <article className="border-b border-line py-8 last:border-0" key={section.title}><Heading level={2} size="h3">{section.title}</Heading><Text className="mt-4">{section.description}</Text></article>)}</div></Section></>; }
