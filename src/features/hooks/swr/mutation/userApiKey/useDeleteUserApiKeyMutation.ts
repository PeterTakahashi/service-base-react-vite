import useSWRMutation from "swr/mutation";
import { client } from "@/lib/client";

async function deleteUserApiKey(
  _url: string,
  { arg: id }: { arg: string }
): Promise<null> {
  const response = await client.delete<null>(`/user-api-keys/${id}`);
  return response.data;
}

export function useDeleteUserApiKeyMutation() {
  const { trigger, isMutating, data, error } = useSWRMutation(
    () => `/user-api-keys`,
    deleteUserApiKey
  );

  return {
    trigger,
    isMutating,
    data,
    error,
  };
}
