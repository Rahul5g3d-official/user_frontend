import { CallToAction } from "../../components/layout/CallToAction";
import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import { AppLink } from "../../components/navigation/AppLink";
import { buttonClassName } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Icon } from "../../components/ui/Icon";
import { Heading, Label, Text } from "../../components/ui/Typography";
import { ROUTES } from "../../constants/routes";
import { siteContent } from "../../content/site";

export function HomePage() {
  const c = siteContent.home;
  const courses = siteContent.courses;
  return (
    <>
      <section className="border-b border-line bg-surface">
        <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div>
            <Label>{c.hero.eyebrow}</Label>
            <Heading className="mt-5 max-w-3xl" level={1} size="display">
              {c.hero.title}
              <span className="block font-serif font-normal text-brand">
                {c.hero.accent}
              </span>
            </Heading>
            <Text className="mt-7 max-w-xl" size="large">
              {c.hero.description}
            </Text>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AppLink
                className={buttonClassName("primary", "lg")}
                to={c.hero.primary.to}
              >
                {c.hero.primary.label}
                <Icon name="arrow" />
              </AppLink>
              <AppLink
                className="border-b border-ink pb-1 text-sm font-extrabold transition hover:text-brand"
                to={c.hero.secondary.to}
              >
                {c.hero.secondary.label}
              </AppLink>
            </div>
          </div>
          <Card
            className="relative min-h-100 overflow-hidden p-6 sm:p-9"
            tone="ink"
          >
            <div className="absolute inset-0 grid grid-cols-4 opacity-15">
              <i className="border-r border-b border-surface" />
              <i className="border-r border-b border-surface" />
              <i className="border-r border-b border-surface" />
              <i className="border-b border-surface" />
            </div>
            <div className="relative grid min-h-82 content-between">
              <div className="flex justify-between gap-4">
                <span className="max-w-35 rounded-xl bg-brand-soft px-4 py-3 text-xs font-extrabold whitespace-pre-line text-ink">
                  {c.hero.noteOne}
                </span>
                <span className="max-w-35 self-end rounded-xl bg-surface px-4 py-3 text-xs font-extrabold whitespace-pre-line text-ink">
                  {c.hero.noteTwo}
                </span>
              </div>
              <div className="mx-auto grid size-56 place-items-center rounded-full border border-surface/40 text-center sm:size-64">
                <div>
                  <strong className="text-5xl font-extrabold tracking-[-0.1em]">
                    {siteContent.brand.name}
                  </strong>
                  <small className="mt-4 block max-w-42 text-[0.6rem] font-extrabold leading-4 tracking-[0.16em] text-brand-soft">
                    {c.hero.ringText}
                  </small>
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </section>
      <section className="bg-ink">
        <Container className="grid gap-px sm:grid-cols-3">
          {c.principles.map((item) => (
            <p
              className="border-b border-surface/15 px-2 py-6 text-center text-xs font-extrabold tracking-wide text-surface sm:border-b-0 sm:border-r sm:last:border-r-0"
              key={item}
            >
              {item}
            </p>
          ))}
        </Container>
      </section>
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.65fr] lg:items-end">
          <div>
            <Label>{c.services.eyebrow}</Label>
            <Heading className="mt-5 max-w-3xl">{c.services.title}</Heading>
          </div>
          <Text>{c.services.description}</Text>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {c.services.items.map((item, index) => (
            <Card
              className="group min-h-72 border border-line p-6 transition hover:-translate-y-1 hover:shadow-lift"
              key={item.title}
              tone={index === 1 ? "tint" : "surface"}
            >
              <span className="text-xs font-extrabold text-brand">
                0{index + 1}
              </span>
              <div className="mt-18">
                <Label>{item.label}</Label>
                <Heading className="mt-4" level={3}>
                  {item.title}
                </Heading>
              </div>
              <span className="mt-8 grid size-10 place-items-center rounded-full border border-ink transition group-hover:bg-ink group-hover:text-surface">
                <Icon name="arrow" />
              </span>
            </Card>
          ))}
        </div>
      </Section>
      <section className="border-y border-line bg-paper">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.65fr] lg:items-end">
            <div>
              <Label>{courses.eyebrow}</Label>
              <Heading className="mt-5 max-w-3xl">{courses.title}</Heading>
            </div>
            <div className="lg:text-right">
              <Text>{courses.description}</Text>
              <AppLink
                className={`mt-6 ${buttonClassName("secondary", "md")}`}
                to={ROUTES.COURSES}
              >
                {courses.action}
                <Icon name="arrow" />
              </AppLink>
            </div>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {courses.items.map((course) => (
              <AppLink
                className="group"
                key={course.slug}
                to={`/courses/${course.slug}`}
              >
                <Card
                  className="flex min-h-68 h-full flex-col border border-line p-6 transition group-hover:-translate-y-1 group-hover:shadow-lift"
                  tone="surface"
                >
                  <Label>{course.category}</Label>
                  <Heading className="mt-4" level={3}>
                    {course.title}
                  </Heading>
                  <Text className="mt-4">{course.description}</Text>
                  <div className="mt-auto flex items-center justify-between pt-7 text-xs font-extrabold text-muted">
                    <span>{course.duration}</span>
                    <span className="grid size-10 place-items-center rounded-full border border-ink text-ink transition group-hover:bg-ink group-hover:text-surface">
                      <Icon name="arrow" size={16} />
                    </span>
                  </div>
                </Card>
              </AppLink>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-tint py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-center">
          <Card
            className="grid min-h-80 place-items-center overflow-hidden border border-ink/10 p-8 text-center"
            tone="ink"
          >
            <span className="font-serif text-7xl text-brand-soft sm:text-8xl">
              {siteContent.brand.name}
            </span>
            <small className="mt-4 block text-xs font-extrabold tracking-[0.15em] text-surface/70">
              {c.approach.artText}
            </small>
          </Card>
          <div>
            <Label>{c.approach.eyebrow}</Label>
            <Heading className="mt-5 max-w-2xl">{c.approach.title}</Heading>
            <Text className="mt-6 max-w-xl">{c.approach.description}</Text>
            <ul className="mt-7 grid gap-3">
              {c.approach.points.map((item) => (
                <li
                  className="flex items-start gap-3 text-sm leading-6 text-muted"
                  key={item}
                >
                  <Icon name="check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <AppLink
              className={`mt-8 ${buttonClassName("secondary", "md")}`}
              to={ROUTES.APPROACH}
            >
              {c.approach.action}
              <Icon name="arrow" />
            </AppLink>
          </div>
        </Container>
      </section>
      <Section width="reading" className="text-center">
        <Label>{c.quote.eyebrow}</Label>
        <blockquote className="mt-6 font-serif text-4xl leading-none tracking-[-0.055em] text-ink sm:text-5xl">
          {c.quote.text}
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-3 text-left">
          <span className="grid size-11 place-items-center rounded-full bg-brand-soft text-xs font-extrabold">
            {c.quote.initials}
          </span>
          <Text className="text-xs" tone="muted">
            <strong className="text-ink">{c.quote.name}</strong>
            <br />
            {c.quote.role}
          </Text>
        </div>
      </Section>
      <CallToAction />
    </>
  );
}
