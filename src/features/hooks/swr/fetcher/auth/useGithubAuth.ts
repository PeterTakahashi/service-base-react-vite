import { fetcher } from "@/features/hooks/swr/fetcher/fetcher";
import { type OAuth2AuthorizeResponse } from "@/types/api/auth/oauth2Authorize";

export function useGithubAuth() {
  const onGithubAuth = async () => {
    const data = await fetcher<OAuth2AuthorizeResponse>(
      "/auth/cookie/github/authorize"
    );
    if (data && data.authorization_url) {
      window.location.href = data.authorization_url;
    }
  };

  return { onGithubAuth };
}
