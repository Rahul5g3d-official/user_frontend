import { AppLink } from "../../components/navigation/AppLink";
import { Card } from "../../components/ui/Card";
import { Heading, Label, Text } from "../../components/ui/Typography";
import { coursePath } from "../courses/CoursesPage";
import { siteContent } from "../../content/site";

export function AllCoursesPage() {
  return (
    <>
      <Label>All courses</Label>
      <Heading className="mt-3" level={1}>
        Choose your next step.
      </Heading>
      <Text className="mt-4 max-w-2xl">
        Explore practical learning designed to help you move forward at your own
        pace.
      </Text>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {siteContent.courses.items.map((course) => (
          <Card
            className="flex min-h-64 flex-col border border-line p-6"
            key={course.slug}
            tone="surface"
          >
            <Label>{course.category}</Label>
            <Heading className="mt-3" level={2}>
              {course.title}
            </Heading>
            <Text className="mt-3">{course.description}</Text>
            <div className="mt-auto flex items-center justify-between pt-7 text-sm font-bold text-muted">
              <span>
                {course.duration} · {course.level}
              </span>
              <AppLink
                className="font-extrabold text-brand hover:text-ink"
                to={coursePath(course.slug)}
              >
                Course details →
              </AppLink>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
