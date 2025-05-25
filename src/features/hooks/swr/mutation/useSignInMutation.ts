import useSWRMutation from "swr/mutation";
import { client } from "@/lib/client";
import type {
  SignInRequestBody,
  SignInResponse,
} from "@/types/api/auth/signIn";

async function signInRequest(
  url: string,
  {
    arg,
  }: {
    arg: SignInRequestBody;
  }
): Promise<SignInResponse> {
  const formData = new URLSearchParams();
  formData.append("username", arg.username);
  formData.append("password", arg.password);
  if (arg.scope) formData.append("scope", arg.scope);
  if (arg.grant_type) formData.append("grant_type", arg.grant_type);

  const response = await client.post<SignInResponse>(url, formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return response.data;
}

export function useSignInMutation() {
  const { trigger, isMutating, data, error } = useSWRMutation(
    "/auth/cookie/login",
    signInRequest
  );

  return {
    trigger,
    isMutating,
    data,
    error,
  };
}
