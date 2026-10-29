import { CallToAction } from "../../components/layout/CallToAction";
import { PageHero } from "../../components/layout/PageHero";
import { Section } from "../../components/layout/Section";
import { Card } from "../../components/ui/Card";
import { Heading, Label, Text } from "../../components/ui/Typography";
import { siteContent } from "../../content/site";

export function ImpactPage() {
  const c = siteContent.impact;
  return (
    <>
      <PageHero {...c.hero} />
      <Section>
        <Text
          className="border-l-4 border-brand bg-surface px-5 py-4"
          size="small"
          tone="default"
        >
          {c.note}
        </Text>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.metrics.map((metric, index) => (
            <Card
              className="p-6"
              key={metric.label}
              tone={index % 2 === 0 ? "ink" : "surface"}
            >
              <strong
                className={`font-serif text-6xl leading-none tracking-[-0.07em] ${index % 2 === 0 ? "text-surface" : "text-ink"}`}
              >
                {metric.value}
              </strong>
              <Text
                className="mt-4"
                size="small"
                tone={index % 2 === 0 ? "inverse" : "muted"}
              >
                {metric.label}
              </Text>
            </Card>
          ))}
        </div>
      </Section>
      <Section className="bg-surface">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.65fr] lg:items-end">
          <div>
            <Label>{c.stories.eyebrow}</Label>
            <Heading className="mt-5">{c.stories.title}</Heading>
          </div>
          <Text>{c.stories.description}</Text>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {c.stories.items.map((item) => (
            <Card className="min-h-68 p-7" key={item.title} tone="tint">
              <Label>{item.tag}</Label>
              <Heading className="mt-12" level={3}>
                {item.title}
              </Heading>
              <Text className="mt-4" size="small">
                {item.description}
              </Text>
              <span className="mt-6 block text-xs font-extrabold text-brand">
                {item.action}
              </span>
            </Card>
          ))}
        </div>
      </Section>
      <CallToAction />
    </>
  );
}
