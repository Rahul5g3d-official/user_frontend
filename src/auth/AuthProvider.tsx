import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { authConfig, isAuthConfigured } from "./config";

type User = { id: string; name: string; email?: string; picture?: string };
type AuthContextValue = {
  isConfigured: boolean;
  isLoading: boolean;
  isAuthenticated: boolean;
  user?: User;
  error?: string;
  login: (returnTo?: string) => Promise<void>;
  logout: () => void;
  getAccessToken: () => Promise<string>;
};
const AuthContext = createContext<AuthContextValue | undefined>(undefined);
const transactionKey = "g4u.auth.transaction";
const transactionLifetime = 10 * 60 * 1000;
const bytesToBase64Url = (bytes: Uint8Array) =>
  btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
const randomValue = () =>
  bytesToBase64Url(crypto.getRandomValues(new Uint8Array(32)));
const codeChallenge = async (verifier: string) =>
  bytesToBase64Url(
    new Uint8Array(
      await crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier)),
    ),
  );

export function AuthProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [state, setState] = useState<{
    loading: boolean;
    token?: string;
    expiresAt?: number;
    user?: User;
    error?: string;
  }>({ loading: isAuthConfigured });
  const completeCallback = useCallback(
    async (code: string, returnedState: string) => {
      const saved = sessionStorage.getItem(transactionKey);
      sessionStorage.removeItem(transactionKey);
      if (!saved)
        throw new Error("Your sign-in session has expired. Please try again.");
      const transaction = JSON.parse(saved) as {
        state: string;
        verifier: string;
        returnTo: string;
        createdAt: number;
      };
      if (
        transaction.state !== returnedState ||
        Date.now() - transaction.createdAt > transactionLifetime
      )
        throw new Error(
          "We could not validate this sign-in request. Please try again.",
        );
      const redirectUri = `${window.location.origin}/login`;
      const response = await fetch(`https://${authConfig.domain}/oauth/token`, {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          client_id: authConfig.clientId,
          code,
          code_verifier: transaction.verifier,
          redirect_uri: redirectUri,
        }),
      });
      if (!response.ok)
        throw new Error("Sign-in could not be completed. Please try again.");
      const tokens = (await response.json()) as {
        access_token?: string;
        expires_in?: number;
      };
      if (!tokens.access_token)
        throw new Error("Sign-in did not return an access token.");
      const profileResponse = await fetch(
        `https://${authConfig.domain}/userinfo`,
        { headers: { authorization: `Bearer ${tokens.access_token}` } },
      );
      if (!profileResponse.ok)
        throw new Error(
          "We could not load your account details. Please try again.",
        );
      const profile = (await profileResponse.json()) as {
        sub: string;
        name?: string;
        email?: string;
        picture?: string;
      };
      setState({
        loading: false,
        token: tokens.access_token,
        expiresAt: Date.now() + (tokens.expires_in ?? 3600) * 1000,
        user: {
          id: profile.sub,
          name: profile.name || profile.email || "Learner",
          email: profile.email,
          picture: profile.picture,
        },
      });
      navigate(
        transaction.returnTo.startsWith("/")
          ? transaction.returnTo
          : "/learning",
        { replace: true },
      );
    },
    [navigate],
  );
  useEffect(() => {
    if (!isAuthConfigured) return;
    const params = new URLSearchParams(location.search);
    const code = params.get("code");
    const returnedState = params.get("state");
    const authError = params.get("error_description") || params.get("error");
    if (!code && !authError) {
      setState((current) =>
        current.loading ? { ...current, loading: false } : current,
      );
      return;
    }
    if (!code || authError || !returnedState) {
      setState({
        loading: false,
        error: authError || "Sign-in could not be completed.",
      });
      return;
    }
    completeCallback(code, returnedState).catch((error: unknown) =>
      setState({
        loading: false,
        error:
          error instanceof Error
            ? error.message
            : "Sign-in could not be completed.",
      }),
    );
  }, [completeCallback, location.search]);
  const login = useCallback(async (returnTo = "/learning") => {
    if (!isAuthConfigured)
      throw new Error("Auth0 has not been configured for this environment.");
    const verifier = randomValue();
    const stateValue = randomValue();
    sessionStorage.setItem(
      transactionKey,
      JSON.stringify({
        verifier,
        state: stateValue,
        returnTo,
        createdAt: Date.now(),
      }),
    );
    const params = new URLSearchParams({
      response_type: "code",
      client_id: authConfig.clientId,
      redirect_uri: `${window.location.origin}/login`,
      scope: "openid profile email",
      audience: authConfig.audience,
      state: stateValue,
      code_challenge: await codeChallenge(verifier),
      code_challenge_method: "S256",
    });
    window.location.assign(
      `https://${authConfig.domain}/authorize?${params.toString()}`,
    );
  }, []);
  const logout = useCallback(() => {
    setState({ loading: false });
    if (isAuthConfigured)
      window.location.assign(
        `https://${authConfig.domain}/v2/logout?${new URLSearchParams({ client_id: authConfig.clientId, returnTo: window.location.origin }).toString()}`,
      );
  }, []);
  const getAccessToken = useCallback(async () => {
    if (
      !state.token ||
      !state.expiresAt ||
      state.expiresAt <= Date.now() + 30_000
    )
      throw new Error("Your session has expired. Please sign in again.");
    return state.token;
  }, [state.expiresAt, state.token]);
  const value = useMemo<AuthContextValue>(
    () => ({
      isConfigured: isAuthConfigured,
      isLoading: state.loading,
      isAuthenticated: Boolean(
        state.token && state.expiresAt && state.expiresAt > Date.now(),
      ),
      user: state.user,
      error: state.error,
      login,
      logout,
      getAccessToken,
    }),
    [getAccessToken, login, logout, state],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider.");
  return context;
}
