import useSWRMutation from "swr/mutation";
import { client } from "@/lib/client";

import type {
  CreatePaymentIntentRequestBody,
  CreatePaymentIntentResponse,
} from "@/types/api/paymentIntent/createPaymentIntent";

async function postPaymentIntent(
  url: string,
  { arg }: { arg: CreatePaymentIntentRequestBody }
): Promise<CreatePaymentIntentResponse> {
  const response = await client.post<CreatePaymentIntentResponse>(url, arg);
  return response.data;
}

export function useCreatePaymentIntentMutation() {
  const { trigger, isMutating, data, error } = useSWRMutation(
    "/payment-intents",
    postPaymentIntent
  );

  return {
    trigger,
    isMutating,
    data,
    error,
  };
}
