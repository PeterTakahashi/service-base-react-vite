import useSWR from "swr";
import { fetcher } from "@/features/hooks/swr/fetcher/fetcher";
import type { UserApiKeyRead } from "@/types/api/userApiKey/userApiKey";
import { useNavigate } from "react-router-dom";

export function useUserApiKey(id?: string) {
  const { data, error, isLoading, mutate } = useSWR<UserApiKeyRead>(
    id ? `/user-api-keys/${id}` : null,
    fetcher
  );
  const navigate = useNavigate();

  if (!id) {
    navigate("/not-found", { replace: true });
  }

  return {
    userApiKey: data ?? null,
    isLoading,
    isError: error,
    mutate,
  };
}
