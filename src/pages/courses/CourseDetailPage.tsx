import { useParams } from "react-router-dom";
import { Container } from "../../components/layout/Container";
import { PageHero } from "../../components/layout/PageHero";
import { Section } from "../../components/layout/Section";
import { AppLink } from "../../components/navigation/AppLink";
import { buttonClassName } from "../../components/ui/Button";
import { Icon } from "../../components/ui/Icon";
import { Heading, Label, Text } from "../../components/ui/Typography";
import { ROUTES } from "../../constants/routes";
import { siteContent } from "../../content/site";
import { NotFoundPage } from "../not-found/NotFoundPage";

export function CourseDetailPage() {
  const { courseSlug } = useParams();
  const course = siteContent.courses.items.find((item) => item.slug === courseSlug);

  if (!course) return <NotFoundPage />;

  return <><PageHero eyebrow={course.category} title={course.title} description={course.overview} /><Section><div className="grid gap-12 lg:grid-cols-[1fr_0.6fr]"><div><Label>What you will learn</Label><Heading className="mt-5" level={2}>Build momentum, one lesson at a time.</Heading><ul className="mt-8 grid gap-4">{course.outcomes.map((outcome) => <li className="flex items-start gap-3 text-base leading-6 text-muted" key={outcome}><Icon name="check" /><span>{outcome}</span></li>)}</ul></div><aside className="rounded-card bg-tint p-7"><Label>Course details</Label><dl className="mt-6 grid gap-5 text-sm"><div><dt className="font-extrabold">Length</dt><dd className="mt-1 text-muted">{course.duration}</dd></div><div><dt className="font-extrabold">Level</dt><dd className="mt-1 text-muted">{course.level}</dd></div></dl><button className={`mt-8 w-full ${buttonClassName("primary", "md")}`} type="button">Start course <Icon name="arrow" /></button></aside></div></Section><section className="border-t border-line bg-paper"><Container className="py-10"><AppLink className="inline-flex items-center gap-2 text-sm font-extrabold hover:text-brand" to={ROUTES.COURSES}><span className="rotate-180"><Icon name="arrow" size={16} /></span>Back to all courses</AppLink></Container></section></>;
}
