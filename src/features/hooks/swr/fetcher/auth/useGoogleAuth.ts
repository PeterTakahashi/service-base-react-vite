import { fetcher } from "@/features/hooks/swr/fetcher/fetcher";
import { type OAuth2AuthorizeResponse } from "@/types/api/auth/oauth2Authorize";

export function useGoogleAuth() {
  const onGoogleAuth = async () => {
    const data = await fetcher<OAuth2AuthorizeResponse>(
      "/auth/cookie/google/authorize"
    );
    if (data && data.authorization_url) {
      window.location.href = data.authorization_url;
    }
  };

  return { onGoogleAuth };
}
