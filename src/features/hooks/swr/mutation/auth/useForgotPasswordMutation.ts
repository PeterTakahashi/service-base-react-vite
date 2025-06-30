import { client } from "@/lib/client";
import type { ForgotPasswordRequestBody } from "@/types/api/auth/forgotPassword";
import { useCustomSWRMutation } from "@/features/hooks/swr/mutation/useCustomSWRMutation";

async function forgotPasswordRequest(
  url: string,
  { arg }: { arg: ForgotPasswordRequestBody }
) {
  await client.post(url, arg);
}

export function useForgotPasswordMutation() {
  const { trigger, isMutating, data, error, errorDetails } =
    useCustomSWRMutation("/auth/forgot-password", forgotPasswordRequest);
  return {
    trigger,
    isMutating,
    data,
    error,
    errorDetails,
  };
}
