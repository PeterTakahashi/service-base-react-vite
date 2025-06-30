import { useCustomSWRMutation } from "@/features/hooks/swr/mutation/useCustomSWRMutation";
import { client } from "@/lib/client";

import type {
  CreatePaymentIntentRequestBody,
  PaymentIntentCreateResponse,
} from "@/types/api/paymentIntent/createPaymentIntent";

async function postPaymentIntent(
  url: string,
  { arg }: { arg: CreatePaymentIntentRequestBody }
): Promise<PaymentIntentCreateResponse> {
  const response = await client.post<PaymentIntentCreateResponse>(url, arg);
  return response.data;
}

export function useCreatePaymentIntentMutation() {
  const { trigger, isMutating, data, error, errorDetails } =
    useCustomSWRMutation("/users/payment-intents", postPaymentIntent);

  return {
    trigger,
    isMutating,
    data,
    error,
    errorDetails,
  };
}
