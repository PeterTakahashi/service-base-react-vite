import useSWRMutation from "swr/mutation";
import { client } from "@/lib/client";
import type { verifyTokenRequestBody } from "@/types/api/auth/verifyToken";
import type { UserRead } from "@/types/api/user/user";

async function verifyTokenRequest(
  url: string,
  { arg }: { arg: verifyTokenRequestBody }
): Promise<UserRead> {
  const response = await client.post(url, { token: arg.token });
  return response.data;
}

export function useVerifyTokenMutation() {
  const { trigger, isMutating, data, error } = useSWRMutation<
    UserRead,
    Error,
    string,
    verifyTokenRequestBody
  >("/auth/verify", verifyTokenRequest);

  return {
    trigger,
    isMutating,
    data,
    error,
  };
}
