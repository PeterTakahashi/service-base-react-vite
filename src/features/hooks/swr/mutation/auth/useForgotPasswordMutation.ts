import useSWRMutation from "swr/mutation";
import { client } from "@/lib/client";
import type { ForgotPasswordRequestBody } from "@/types/api/auth/forgotPassword";

async function forgotPasswordRequest(
  url: string,
  { arg }: { arg: ForgotPasswordRequestBody }
) {
  await client.post(url, arg);
}

export function useForgotPasswordMutation() {
  const { trigger, isMutating, data, error } = useSWRMutation(
    "/auth/forgot-password",
    forgotPasswordRequest
  );
  return {
    trigger,
    isMutating,
    data,
    error,
  };
}
