import { authConfig } from "./config";
export async function apiGet<T>(path: string, accessToken: string): Promise<T> {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 10_000);
  try {
    const response = await fetch(`${authConfig.apiUrl}${path}`, {
      headers: {
        authorization: `Bearer ${accessToken}`,
        accept: "application/json",
      },
      signal: controller.signal,
    });
    if (!response.ok)
      throw new Error(
        response.status === 401
          ? "Your session has expired. Please sign in again."
          : "We could not load this information. Please try again.",
      );
    return ((await response.json()) as { data: T }).data;
  } finally {
    window.clearTimeout(timer);
  }
}
