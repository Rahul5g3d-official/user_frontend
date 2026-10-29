import { CallToAction } from "../../components/layout/CallToAction";
import { PageHero } from "../../components/layout/PageHero";
import { Section } from "../../components/layout/Section";
import { Icon } from "../../components/ui/Icon";
import { Heading, Label, Text } from "../../components/ui/Typography";
import { siteContent } from "../../content/site";

export function ServicesPage() {
  const c = siteContent.services;
  return (
    <>
      <PageHero {...c.hero} />
      <Section>
        <div className="divide-y divide-line">
          {c.items.map((item, index) => (
            <article
              className="grid gap-7 py-10 first:pt-0 md:grid-cols-[9rem_1fr] md:py-14"
              key={item.title}
            >
              <span className="text-sm font-extrabold text-brand">
                0{index + 1}
              </span>
              <div>
                <Label>{item.kicker}</Label>
                <Heading className="mt-4" level={2}>
                  {item.title}
                </Heading>
                <Text className="mt-6 max-w-2xl" size="large">
                  {item.description}
                </Text>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {item.benefits.map((benefit) => (
                    <li
                      className="flex items-start gap-3 text-sm leading-6 text-muted"
                      key={benefit}
                    >
                      <Icon name="check" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <CallToAction />
    </>
  );
}
