import { useState } from "react";
import type { FormEvent } from "react";
import { PageHero } from "../../components/layout/PageHero";
import { Section } from "../../components/layout/Section";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { FormField } from "../../components/ui/FormField";
import { Icon } from "../../components/ui/Icon";
import { Heading, Label, Text } from "../../components/ui/Typography";
import { siteContent } from "../../content/site";

export function ContactPage() {
  const c = siteContent.contact;
  const [submitted, setSubmitted] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <>
      <PageHero {...c.hero} compact />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Label>{c.details.eyebrow}</Label>
            <Heading className="mt-5">{c.details.title}</Heading>
            <Text className="mt-6">{c.details.description}</Text>
            <dl className="mt-9 grid gap-6">
              <div className="flex gap-3">
                <Icon name="mail" />
                <div>
                  <dt className="text-xs font-extrabold uppercase tracking-[0.14em]">
                    {c.details.emailLabel}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-muted">
                    {c.details.email}
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Icon name="pin" />
                <div>
                  <dt className="text-xs font-extrabold uppercase tracking-[0.14em]">
                    {c.details.locationLabel}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-muted">
                    {c.details.location}
                  </dd>
                </div>
              </div>
            </dl>
            <div className="mt-9 flex flex-wrap gap-2">
              {c.details.socials.map((item) => (
                <span
                  className="rounded-full border border-line px-3 py-2 text-xs font-extrabold"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <Card className="p-6 shadow-lift sm:p-9" tone="surface">
            <form onSubmit={submit}>
              {submitted ? (
                <div className="grid min-h-80 content-center">
                  <span className="grid size-14 place-items-center rounded-full bg-tint text-brand">
                    <Icon name="check" size={30} />
                  </span>
                  <Heading className="mt-6" level={2}>
                    {c.form.successTitle}
                  </Heading>
                  <Text className="mt-4">{c.form.successDescription}</Text>
                </div>
              ) : (
                <div className="grid gap-6">
                  {c.form.fields.map((field) => (
                    <FormField key={field.name} {...field} />
                  ))}
                  <Button
                    className="justify-self-start"
                    variant="secondary"
                    type="submit"
                  >
                    {c.form.action}
                    <Icon name="arrow" />
                  </Button>
                </div>
              )}
            </form>
          </Card>
        </div>
      </Section>
    </>
  );
}
