import { useState } from "react";
import { PageHero } from "../../components/layout/PageHero";
import { Section } from "../../components/layout/Section";
import { Icon } from "../../components/ui/Icon";
import { Text } from "../../components/ui/Typography";
import { siteContent } from "../../content/site";

export function FaqPage() {
  const c = siteContent.faq;
  const [active, setActive] = useState<number | null>(0);
  return (
    <>
      <PageHero {...c.hero} compact />
      <Section width="reading">
        <div className="border-y border-line">
          {c.items.map((item, index) => {
            const expanded = active === index;
            const answerId = `faq-answer-${index}`;
            return (
              <article
                className="border-b border-line last:border-0"
                key={item.question}
              >
                <button
                  className="flex w-full items-center justify-between gap-6 py-6 text-left text-sm font-extrabold sm:text-base"
                  type="button"
                  onClick={() => setActive(expanded ? null : index)}
                  aria-expanded={expanded}
                  aria-controls={answerId}
                >
                  <span>{item.question}</span>
                  <span
                    className={`grid size-8 shrink-0 place-items-center rounded-full border border-line transition ${expanded ? "rotate-45 bg-brand text-surface" : ""}`}
                  >
                    <Icon name="plus" />
                  </span>
                </button>
                {expanded && (
                  <Text id={answerId} className="max-w-2xl pb-7 pr-10">
                    {item.answer}
                  </Text>
                )}
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
