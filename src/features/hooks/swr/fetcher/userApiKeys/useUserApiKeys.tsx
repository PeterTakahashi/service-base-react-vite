import useSWR from "swr";
import { fetcher } from "@/features/hooks/swr/fetcher/fetcher";
import type {
  UserApiKeyListResponse,
  UserApiKeyListRequestQuery,
} from "@/types/api/userApiKey/userApiKey";
import { buildQueryString } from "@/lib/buildQueryString";

export function useUserApiKeys(query: UserApiKeyListRequestQuery = {}) {
  const queryString = buildQueryString(query);
  const { data, error, isLoading, mutate } = useSWR<UserApiKeyListResponse>(
    `/user-api-keys?${queryString}`,
    fetcher
  );

  const userApiKeys = data?.data || [];
  const meta = data?.meta;

  return {
    userApiKeys,
    meta,
    isLoading,
    isError: error,
    mutate,
  };
}
