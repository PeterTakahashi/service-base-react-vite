import { useCustomSWRMutation } from "@/features/hooks/swr/mutation/useCustomSWRMutation";
import { client } from "@/lib/client";
import type { UserApiKeyCreateRequestBody } from "@/types/api/userApiKey/userApiKeyForm";
import type { UserApiKeyRead } from "@/types/api/userApiKey/userApiKey";

async function postUserApiKey(
  url: string,
  { arg }: { arg: UserApiKeyCreateRequestBody }
): Promise<UserApiKeyRead> {
  const response = await client.post<UserApiKeyRead>(url, arg);
  return response.data;
}

export function useCreateUserApiKeyMutation() {
  const { trigger, isMutating, data, error, errorDetails } = useCustomSWRMutation(
    "/user-api-keys",
    postUserApiKey
  );

  return {
    trigger,
    isMutating,
    data,
    error,
    errorDetails,
  };
}
