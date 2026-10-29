import { CallToAction } from "../../components/layout/CallToAction";
import { Container } from "../../components/layout/Container";
import { PageHero } from "../../components/layout/PageHero";
import { Section } from "../../components/layout/Section";
import { Card } from "../../components/ui/Card";
import { Icon } from "../../components/ui/Icon";
import { Heading, Label, Text } from "../../components/ui/Typography";
import { siteContent } from "../../content/site";

export function ApproachPage() {
  const c = siteContent.approachPage;
  return (
    <>
      <PageHero {...c.hero} />
      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          {c.steps.map((item, index) => (
            <Card className="border border-line p-6 sm:p-8" key={item.title}>
              <span className="text-xs font-extrabold text-brand">
                0{index + 1}
              </span>
              <Label className="mt-12 block">{item.eyebrow}</Label>
              <Heading className="mt-4" level={3}>
                {item.title}
              </Heading>
              <Text className="mt-5">{item.description}</Text>
            </Card>
          ))}
        </div>
      </Section>
      <section className="bg-ink py-16 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr_1fr] lg:items-stretch">
            <div>
              <Label tone="inverse">{c.participate.eyebrow}</Label>
              <Heading className="mt-5" tone="inverse">
                {c.participate.title}
              </Heading>
              <Text className="mt-6" tone="inverse">
                {c.participate.description}
              </Text>
            </div>
            {c.participate.items.map((item) => (
              <Card
                className="border border-surface/15 p-7"
                key={item.title}
                tone="ink"
              >
                <Icon name="heart" />
                <Heading className="mt-12" level={3} tone="inverse">
                  {item.title}
                </Heading>
                <Text className="mt-4" size="small" tone="inverse">
                  {item.description}
                </Text>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <CallToAction />
    </>
  );
}
