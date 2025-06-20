import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useCallback, useState } from "react";
import { PaymentForm } from "@/components/molecules/forms/PaymentForm";
import { useCreatePaymentIntentMutation } from "@/features/hooks/swr/mutation/paymentIntent/useCreatePaymentIntentMutation";
import {
  PaymentIntentCreateForm,
  type PaymentIntentValues,
} from "@/components/molecules/forms/PaymentIntentCreateForm";
import { useAddFundsPageBreadcrumbs } from "./breadcrumbs";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY!);

export function AddFundsPage() {
  const { trigger: createPaymentIntent, errorDetails } =
    useCreatePaymentIntentMutation();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [amount, setAmount] = useState<number | null>(null); // Amount in cents
  useAddFundsPageBreadcrumbs();

  const handlePaymentIntentCreate = useCallback(
    async (data: PaymentIntentValues) => {
      const paymentIntent = await createPaymentIntent({
        amount: data.amount,
      });
      setAmount(data.amount);
      setClientSecret(paymentIntent.client_secret);
    },
    [createPaymentIntent]
  );

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-6 py-12 shadow-sm sm:rounded-lg sm:px-12 sm:mx-0 mx-2">
          <h2 className="mb-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Add Funds
          </h2>
          {amount == null && (
            <PaymentIntentCreateForm
              onSubmit={handlePaymentIntentCreate}
              errorDetails={errorDetails}
            />
          )}
          {clientSecret && amount && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <PaymentForm amount={amount} />
            </Elements>
          )}
        </div>
      </div>
    </div>
  );
}
