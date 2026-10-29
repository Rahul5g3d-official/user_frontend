import { siteContent } from "../../content/site";
import { AppLink } from "../navigation/AppLink";
import { buttonClassName } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { Heading, Label, Text } from "../ui/Typography";
import { Container } from "./Container";

export function CallToAction() {
  const c = siteContent.sharedCta;
  return <section className="bg-brand py-16 sm:py-20"><Container className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div className="max-w-2xl"><Label tone="inverse">{c.eyebrow}</Label><Heading className="mt-5" level={2} tone="inverse">{c.title}</Heading><Text className="mt-5 max-w-xl" tone="inverse">{c.description}</Text></div><AppLink className={buttonClassName("light", "lg")} to={c.to}>{c.action}<Icon name="arrow" /></AppLink></Container></section>;
}
