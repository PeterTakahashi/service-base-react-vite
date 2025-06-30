import { useCustomSWRMutation } from "@/features/hooks/swr/mutation/useCustomSWRMutation";
import { client } from "@/lib/client";
import type { UserApiKeyUpdateRequestBody } from "@/types/api/userApiKey/userApiKeyForm";
import type { UserApiKeyRead } from "@/types/api/userApiKey/userApiKey";

async function patchUserApiKey(
  url: string,
  { arg }: { arg: UserApiKeyUpdateRequestBody }
): Promise<UserApiKeyRead> {
  const response = await client.patch<UserApiKeyRead>(url, arg);
  return response.data;
}

export function useUpdateUserApiKeyMutation(id: string) {
  const { trigger, isMutating, data, error, errorDetails } =
    useCustomSWRMutation(`/user-api-keys/${id}`, patchUserApiKey);

  return {
    trigger,
    isMutating,
    data,
    error,
    errorDetails,
  };
}
