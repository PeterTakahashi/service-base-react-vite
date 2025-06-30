import { useCustomSWRMutation } from "@/features/hooks/swr/mutation/useCustomSWRMutation";
import { client } from "@/lib/client";
import type { ResetPasswordRequestBody } from "@/types/api/auth/resetPassword";

async function resetPasswordRequest(
  url: string,
  { arg }: { arg: ResetPasswordRequestBody }
) {
  await client.post(url, arg);
}

export function useResetPasswordMutation() {
  const { trigger, isMutating, data, error, errorDetails } =
    useCustomSWRMutation("/auth/reset-password", resetPasswordRequest);

  return {
    trigger,
    isMutating,
    data,
    error,
    errorDetails,
  };
}
