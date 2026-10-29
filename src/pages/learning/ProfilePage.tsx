import { useAuth } from "../../auth/AuthProvider";
import { Card } from "../../components/ui/Card";
import { Heading, Label, Text } from "../../components/ui/Typography";

export function ProfilePage() {
  const { user } = useAuth();
  return (
    <>
      <Label>Profile</Label>
      <Heading className="mt-3" level={1}>
        Your account
      </Heading>
      <Text className="mt-4">
        These details are managed by your secure Auth0 sign-in.
      </Text>
      <Card
        className="mt-8 max-w-2xl border border-line p-6 sm:p-8"
        tone="surface"
      >
        <div className="flex items-center gap-4">
          {user?.picture ? (
            <img
              className="size-16 rounded-full object-cover"
              src={user.picture}
              alt=""
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="grid size-16 place-items-center rounded-full bg-tint text-xl font-extrabold">
              {user?.name.slice(0, 1).toUpperCase()}
            </div>
          )}
          <div>
            <Heading level={2}>{user?.name}</Heading>
            <Text className="mt-1 text-sm">
              {user?.email ||
                "Email address not shared by your identity provider"}
            </Text>
          </div>
        </div>
        <dl className="mt-8 divide-y divide-line border-y border-line">
          <div className="flex justify-between gap-5 py-4">
            <dt className="font-bold">Sign-in provider</dt>
            <dd className="text-muted">Auth0</dd>
          </div>
          <div className="flex justify-between gap-5 py-4">
            <dt className="font-bold">Account ID</dt>
            <dd className="max-w-[14rem] truncate text-muted" title={user?.id}>
              {user?.id}
            </dd>
          </div>
        </dl>
        <Text className="mt-6 text-xs">
          To change your password, connection, or identity details, use the
          account options supplied by your Auth0 connection.
        </Text>
      </Card>
    </>
  );
}
