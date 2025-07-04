import { useCustomSWRMutation } from "@/features/hooks/swr/mutation/useCustomSWRMutation";
import { client } from "@/lib/client";
import type { SignUpRequestBody } from "@/types/api/auth/signup";
import type { UserRead } from "@/types/api/user/user";

async function signUpRequest(
  url: string,
  { arg }: { arg: SignUpRequestBody }
): Promise<UserRead> {
  const response = await client.post<UserRead>(url, arg, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
}

export function useSignUpMutation() {
  const { trigger, isMutating, data, error, errorDetails } = useCustomSWRMutation(
    "/auth/register/register",
    signUpRequest
  );

  return {
    trigger,
    isMutating,
    data,
    error,
    errorDetails,
  };
}
