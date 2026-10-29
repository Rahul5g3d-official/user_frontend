import { PageHero } from "../../components/layout/PageHero";
import { Section } from "../../components/layout/Section";
import { Button } from "../../components/ui/Button";
import { Heading, Label, Text } from "../../components/ui/Typography";
import { siteContent } from "../../content/site";

export function LoginPage() {
  const c = siteContent.login;
  return <><PageHero {...c.hero} compact /><Section width="reading"><div className="rounded-card border border-line bg-surface p-6 sm:p-8"><Heading level={2}>Log in</Heading><form className="mt-7 grid gap-5" onSubmit={(event) => event.preventDefault()}><label className="grid gap-2"><Label as="span" tone="default">{c.emailLabel}</Label><input className="rounded-xl border border-line bg-paper px-4 py-3 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" type="email" autoComplete="email" required /></label><label className="grid gap-2"><Label as="span" tone="default">{c.passwordLabel}</Label><input className="rounded-xl border border-line bg-paper px-4 py-3 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" type="password" autoComplete="current-password" required /></label><Button className="mt-2" type="submit">{c.action}</Button></form><Text className="mt-6 text-xs" tone="muted">{c.note}</Text></div></Section></>;
}
