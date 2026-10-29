import { AppLink } from "../../components/navigation/AppLink";
import { Card } from "../../components/ui/Card";
import { Heading, Label, Text } from "../../components/ui/Typography";
import { ROUTES } from "../../constants/routes";
import { useAuth } from "../../auth/AuthProvider";

export function LearningHomePage() {
  const { user } = useAuth();
  return (
    <>
      <Label>Learning dashboard</Label>
      <Heading className="mt-3" level={1}>
        Welcome back, {user?.name.split(" ")[0] || "learner"}.
      </Heading>
      <Text className="mt-4 max-w-2xl">
        Keep your momentum going. Your courses, progress and account details are
        all in one private space.
      </Text>
      <div className="mt-9 grid gap-5 lg:grid-cols-3">
        <Card className="border border-line p-6" tone="surface">
          <Label>Continue learning</Label>
          <Heading className="mt-3" level={2}>
            Pick up where you left off
          </Heading>
          <Text className="mt-3">
            Your purchased learning is securely linked to your Auth0 account.
          </Text>
          <AppLink
            className="mt-6 inline-block text-sm font-extrabold text-brand hover:text-ink"
            to={ROUTES.MY_COURSES}
          >
            Open my courses →
          </AppLink>
        </Card>
        <Card className="border border-line p-6" tone="surface">
          <Label>Explore</Label>
          <Heading className="mt-3" level={2}>
            Find your next step
          </Heading>
          <Text className="mt-3">
            Browse the full course library and discover a path that fits your
            goals.
          </Text>
          <AppLink
            className="mt-6 inline-block text-sm font-extrabold text-brand hover:text-ink"
            to={ROUTES.LEARNING_COURSES}
          >
            View all courses →
          </AppLink>
        </Card>
        <Card className="border border-line p-6" tone="tint">
          <Label>Account</Label>
          <Heading className="mt-3" level={2}>
            Your profile
          </Heading>
          <Text className="mt-3">
            Review the identity details provided by your secure sign-in.
          </Text>
          <AppLink
            className="mt-6 inline-block text-sm font-extrabold text-brand hover:text-ink"
            to={ROUTES.PROFILE}
          >
            View profile →
          </AppLink>
        </Card>
      </div>
    </>
  );
}
