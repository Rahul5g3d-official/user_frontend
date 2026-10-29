import { useEffect, useState } from "react";
import { apiGet } from "../../auth/api";
import { useAuth } from "../../auth/AuthProvider";
import { Card } from "../../components/ui/Card";
import { Heading, Label, Text } from "../../components/ui/Typography";

type PurchasedCourse = {
  slug: string;
  title: string;
  category: string;
  progress: number;
  lessonsCompleted: number;
  lessonsTotal: number;
};

export function MyCoursesPage() {
  const { getAccessToken } = useAuth();
  const [result, setResult] = useState<{
    courses?: PurchasedCourse[];
    error?: string;
  }>({});
  useEffect(() => {
    let active = true;
    void (async () => {
      try {
        const token = await getAccessToken();
        const data = await apiGet<{ courses: PurchasedCourse[] }>(
          "/courses/purchases",
          token,
        );
        if (active) setResult({ courses: data.courses });
      } catch (error) {
        if (active)
          setResult({
            error:
              error instanceof Error
                ? error.message
                : "We could not load your courses.",
          });
      }
    })();
    return () => {
      active = false;
    };
  }, [getAccessToken]);
  return (
    <>
      <Label>My courses</Label>
      <Heading className="mt-3" level={1}>
        Your purchased courses
      </Heading>
      <Text className="mt-4">Everything you have access to is shown here.</Text>
      {result.error && (
        <p
          className="mt-7 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-800"
          role="alert"
        >
          {result.error}
        </p>
      )}
      {!result.courses && !result.error && (
        <p className="mt-8 text-sm font-bold text-muted" aria-live="polite">
          Loading your courses…
        </p>
      )}
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {result.courses?.map((course) => (
          <Card
            key={course.slug}
            className="border border-line p-6"
            tone="surface"
          >
            <Label>{course.category}</Label>
            <Heading className="mt-3" level={2}>
              {course.title}
            </Heading>
            <div className="mt-7 h-2 overflow-hidden rounded-full bg-line">
              <div
                className="h-full rounded-full bg-brand"
                style={{ width: `${course.progress}%` }}
              />
            </div>
            <div className="mt-3 flex justify-between text-sm font-bold text-muted">
              <span>{course.progress}% complete</span>
              <span>
                {course.lessonsCompleted} of {course.lessonsTotal} lessons
              </span>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
