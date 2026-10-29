const stripTrailingSlash = (value: string) => value.replace(/\/+$/, "");

const rawDomain = import.meta.env.VITE_AUTH0_DOMAIN?.trim() ?? "";
const domain = rawDomain.replace(/^https:\/\//, "").replace(/\/+$/, "");

export const authConfig = {
  domain,
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID?.trim() ?? "",
  audience: import.meta.env.VITE_AUTH0_AUDIENCE?.trim() ?? "",
  apiUrl: stripTrailingSlash(
    import.meta.env.VITE_USER_API_URL?.trim() || "http://localhost:4001/api/v1",
  ),
};

export const isAuthConfigured = Boolean(
  authConfig.domain &&
  /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+$/i.test(
    authConfig.domain,
  ) &&
  authConfig.clientId &&
  authConfig.audience,
);
