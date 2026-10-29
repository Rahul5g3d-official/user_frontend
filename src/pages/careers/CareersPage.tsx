import { AppLink } from "../../components/navigation/AppLink";
import { PageHero } from "../../components/layout/PageHero";
import { Section } from "../../components/layout/Section";
import { buttonClassName } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Icon } from "../../components/ui/Icon";
import { Heading, Label, Text } from "../../components/ui/Typography";
import { ROUTES } from "../../constants/routes";
import { siteContent } from "../../content/site";

export function CareersPage() {
  const c = siteContent.careers;
  return (
    <>
      <PageHero {...c.hero} />
      <Section className="bg-tint">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Label>{c.culture.eyebrow}</Label>
            <Heading className="mt-5">{c.culture.title}</Heading>
            <Text className="mt-6 max-w-xl">{c.culture.description}</Text>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {c.culture.words.map((item) => (
              <span
                className="rounded-full border border-ink/15 px-4 py-5 text-center font-serif text-2xl"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <Label>{c.benefits.eyebrow}</Label>
        <Heading className="mt-5">{c.benefits.title}</Heading>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {c.benefits.items.map((item, index) => (
            <Card className="border border-line p-7" key={item.title}>
              <span className="text-xs font-extrabold text-brand">
                0{index + 1}
              </span>
              <Heading className="mt-12" level={3}>
                {item.title}
              </Heading>
              <Text className="mt-4" size="small">
                {item.description}
              </Text>
            </Card>
          ))}
        </div>
      </Section>
      <Section className="pt-0">
        <Card
          className="mx-auto max-w-5xl px-6 py-14 text-center sm:px-12"
          tone="tint"
        >
          <Label>{c.jobs.eyebrow}</Label>
          <Heading className="mx-auto mt-5 max-w-2xl">{c.jobs.title}</Heading>
          <Text className="mx-auto mt-6 max-w-xl">{c.jobs.description}</Text>
          <AppLink
            to={ROUTES.CONTACT}
            className={`mt-8 ${buttonClassName("primary", "md")}`}
          >
            {c.jobs.action}
            <Icon name="arrow" />
          </AppLink>
        </Card>
      </Section>
    </>
  );
}
