import { PageHero } from "../../components/layout/PageHero";
import { Section } from "../../components/layout/Section";
import { AppLink } from "../../components/navigation/AppLink";
import { Card } from "../../components/ui/Card";
import { Icon } from "../../components/ui/Icon";
import { Heading, Label, Text } from "../../components/ui/Typography";
import { ROUTES } from "../../constants/routes";
import { siteContent } from "../../content/site";

export function coursePath(slug: string) {
  return ROUTES.COURSE_DETAIL.replace(":courseSlug", slug);
}

export function CoursesPage() {
  const c = siteContent.courses;
  const page = siteContent.coursesPage;

  return <><PageHero {...page.hero} /><Section><Label>{page.allCourses}</Label><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{c.items.map((course) => <AppLink key={course.slug} to={coursePath(course.slug)} className="group"><Card className="flex h-full min-h-74 flex-col border border-line p-6 transition group-hover:-translate-y-1 group-hover:shadow-lift" tone="surface"><Label>{course.category}</Label><Heading className="mt-4" level={2}>{course.title}</Heading><Text className="mt-4">{course.description}</Text><div className="mt-auto flex items-center justify-between pt-8 text-xs font-extrabold text-muted"><span>{course.duration} · {course.level}</span><span className="grid size-10 place-items-center rounded-full border border-ink text-ink transition group-hover:bg-ink group-hover:text-surface"><Icon name="arrow" size={16} /></span></div></Card></AppLink>)}</div></Section></>;
}
