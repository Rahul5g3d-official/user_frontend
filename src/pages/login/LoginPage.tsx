import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";
import { PageHero } from "../../components/layout/PageHero";
import { Section } from "../../components/layout/Section";
import { Button } from "../../components/ui/Button";
import { Heading, Text } from "../../components/ui/Typography";
import { ROUTES } from "../../constants/routes";
import { siteContent } from "../../content/site";

export function LoginPage() {
  const { isAuthenticated, isConfigured, isLoading, error, login } = useAuth();
  const location = useLocation();
  const requestedPath =
    (location.state as { from?: { pathname?: string } } | null)?.from
      ?.pathname || ROUTES.LEARNING;
  if (isAuthenticated) return <Navigate to={ROUTES.LEARNING} replace />;
  return (
    <>
      <PageHero {...siteContent.login.hero} compact />
      <Section width="reading">
        <div className="rounded-card border border-line bg-surface p-6 sm:p-8">
          <Heading level={2}>Continue securely with Auth0</Heading>
          <Text className="mt-3" tone="muted">
            You will sign in on our secure identity provider. G4U never sees or
            stores your password.
          </Text>
          {error && (
            <p
              className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-800"
              role="alert"
            >
              {error}
            </p>
          )}
          {!isConfigured && (
            <p
              className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-bold text-amber-900"
              role="alert"
            >
              Sign-in is not configured in this environment. Add the Auth0
              environment variables before publishing.
            </p>
          )}
          <Button
            className="mt-7"
            type="button"
            disabled={!isConfigured || isLoading}
            loading={isLoading}
            loadingLabel="Completing secure sign-in…"
            onClick={() => void login(requestedPath)}
          >
            Continue to secure sign in
          </Button>
          <Text className="mt-6 text-xs" tone="muted">
            Protected by Auth0 with PKCE and a one-time sign-in request.
          </Text>
        </div>
      </Section>
    </>
  );
}
