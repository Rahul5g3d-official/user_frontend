import { AppLink } from "../../components/navigation/AppLink";
import { buttonClassName } from "../../components/ui/Button";
import { Icon } from "../../components/ui/Icon";
import { Heading, Label, Text } from "../../components/ui/Typography";
import { ROUTES } from "../../constants/routes";
import { siteContent } from "../../content/site";

export function NotFoundPage() { const c = siteContent.notFound; return <section className="grid min-h-130 place-items-center px-5 py-20 text-center"><div><span className="font-serif text-9xl leading-none tracking-[-0.08em] text-brand">{c.code}</span><Label className="mt-6 block">{c.eyebrow}</Label><Heading className="mt-4" level={1}>{c.title}</Heading><Text className="mx-auto mt-5 max-w-md">{c.description}</Text><AppLink to={ROUTES.HOME} className={`mt-8 ${buttonClassName("primary", "md")}`}>{c.action}<Icon name="arrow" /></AppLink></div></section>; }
