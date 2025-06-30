import { useCustomSWRMutation } from "@/features/hooks/swr/mutation/useCustomSWRMutation";
import { client } from "@/lib/client";

async function requestVerifyTokenRequest(
  url: string,
  { arg }: { arg: { email: string } }
): Promise<void> {
  await client.post(url, { email: arg.email });
}

export function useRequestVerifyTokenMutation() {
  const { trigger, isMutating, data, error, errorDetails } =
    useCustomSWRMutation(
      "/auth/request-verify-token",
      requestVerifyTokenRequest
    );

  return {
    trigger,
    isMutating,
    data,
    error,
    errorDetails,
  };
}
