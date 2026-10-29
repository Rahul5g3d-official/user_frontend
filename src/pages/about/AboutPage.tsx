import { PageHero } from "../../components/layout/PageHero";
import { Section } from "../../components/layout/Section";
import { Card } from "../../components/ui/Card";
import { Heading, Label, Text } from "../../components/ui/Typography";
import { siteContent } from "../../content/site";

export function AboutPage() {
  const c = siteContent.about;
  return (
    <>
      <PageHero {...c.hero} />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Label>{c.story.eyebrow}</Label>
            <Heading className="mt-5 max-w-xl">{c.story.title}</Heading>
          </div>
          <div className="grid content-start gap-5">
            {c.story.paragraphs.map((item) => (
              <Text size="large" key={item}>
                {item}
              </Text>
            ))}
          </div>
        </div>
      </Section>
      <Section className="bg-ink">
        <div className="grid gap-px md:grid-cols-2">
          <Card className="border border-surface/15 p-8 sm:p-12" tone="ink">
            <Label tone="inverse">{c.vision.eyebrow}</Label>
            <Heading className="mt-5" tone="inverse">
              {c.vision.title}
            </Heading>
            <Text className="mt-6 max-w-lg" tone="inverse">
              {c.vision.description}
            </Text>
          </Card>
          <Card className="p-8 sm:p-12" tone="tint">
            <Label>{c.mission.eyebrow}</Label>
            <Heading className="mt-5">{c.mission.title}</Heading>
            <Text className="mt-6 max-w-lg">{c.mission.description}</Text>
          </Card>
        </div>
      </Section>
      <Section>
        <Label>{c.values.eyebrow}</Label>
        <Heading className="mt-5 max-w-2xl">{c.values.title}</Heading>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.values.items.map((item, index) => (
            <Card className="border border-line p-6" key={item.title}>
              <span className="text-xs font-extrabold text-brand">
                0{index + 1}
              </span>
              <Heading className="mt-12" level={3}>
                {item.title}
              </Heading>
              <Text className="mt-3" size="small">
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
          <Label>{c.team.eyebrow}</Label>
          <Heading className="mx-auto mt-5 max-w-2xl">{c.team.title}</Heading>
          <Text className="mx-auto mt-6 max-w-xl">{c.team.description}</Text>
        </Card>
      </Section>
    </>
  );
}
