import useSWRMutation from "swr/mutation";
import { client } from "@/lib/client";
import type { ResetPasswordRequestBody } from "@/types/api/auth/resetPassword";

async function resetPasswordRequest(
  url: string,
  { arg }: { arg: ResetPasswordRequestBody }
) {
  await client.post(url, arg);
}

export function useResetPasswordMutation() {
  const { trigger, isMutating, data, error } = useSWRMutation(
    "/auth/reset-password",
    resetPasswordRequest
  );

  return {
    trigger,
    isMutating,
    data,
    error,
  };
}
