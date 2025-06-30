import { useCustomSWRMutation } from "@/features/hooks/swr/mutation/useCustomSWRMutation";
import { client } from "@/lib/client";
import type { UserUpdate, UserRead } from "@/types/api/user/user";

async function patchUser(
  url: string,
  { arg }: { arg: UserUpdate }
): Promise<UserRead> {
  const response = await client.patch<UserRead>(url, arg);
  return response.data;
}

export function useEditUserMutation() {
  const { trigger, isMutating, data, error, errorDetails } = useCustomSWRMutation(
    "/users/me",
    patchUser
  );

  return {
    trigger,
    isMutating,
    data,
    error,
    errorDetails,
  };
}
